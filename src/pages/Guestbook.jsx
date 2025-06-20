import React, { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import defaultIcon from "../assets/images/png/ic.png";

// Helper functions for profile color and initials
const getProfileColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = ["#461111", "#A13333", "#B3541E"];
  return colors[Math.abs(hash) % colors.length];
};

const getInitials = (name) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

// Define available reactions (these are just local)
const availableReactions = [
  { type: "like", icon: "👍" },
  { type: "love", icon: "❤️" },
  { type: "sad", icon: "😢" },
  { type: "haha", icon: "😂" },
  { type: "wow", icon: "😮" },
];

function Guestbook() {
  const [tributes, setTributes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ author_name: "", message: "" });
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState({}); // Comments for each tribute
  const [commentForms, setCommentForms] = useState({}); // Comment form state for each tribute
  const [showCommentForm, setShowCommentForm] = useState({}); // Which comment forms are visible
  const [reactions, setReactions] = useState({}); // Reactions for each tribute (local)
  const firstTributeRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchTributes();
    // Scroll to the form on initial page load
    if (formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  async function fetchTributes() {
    try {
      setLoading(true);
      // Fetch tributes from Supabase
      const { data, error } = await supabase
        .from("tributes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching tributes:", error);
        toast.error("Failed to fetch tributes");
        setTributes([]);
        return;
      }

      if (!data || data.length === 0) {
        setTributes([]);
        return;
      }

      // Initialize comments and reactions for each tribute
      initializeCommentsForTributes(data);
      const initialReactions = {};
      data.forEach((tribute) => {
        // Initialize all reaction counts to 0 if not set
        initialReactions[tribute.id] = {
          like: 0,
          love: 0,
          sad: 0,
          haha: 0,
          wow: 0,
        };
      });
      setReactions(initialReactions);

      setTributes(data);
    } catch (error) {
      console.error("Error fetching tributes:", error);
      toast.error("Failed to fetch tributes");
    } finally {
      setLoading(false);
    }
  }

  // Initialize comments for tributes
  function initializeCommentsForTributes(tributesList) {
    const initialComments = {};
    const initialCommentForms = {};
    const initialShowCommentForm = {};

    tributesList.forEach((tribute) => {
      initialComments[tribute.id] = [];
      initialCommentForms[tribute.id] = { author_name: "", message: "" };
      initialShowCommentForm[tribute.id] = false;
    });

    setComments(initialComments);
    setCommentForms(initialCommentForms);
    setShowCommentForm(initialShowCommentForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.author_name || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Sanitize user inputs for tribute submission
    const sanitizedAuthor = DOMPurify.sanitize(form.author_name);
    const sanitizedMessage = DOMPurify.sanitize(form.message);

    setSubmitting(true);
    let imageUrl = "";

    try {
      if (file) {
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
        if (file.size > MAX_FILE_SIZE) {
          toast.error("File size must be less than 5MB");
          setSubmitting(false);
          return;
        }

        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data, error } = await supabase.storage
          .from("images")
          .upload(filePath, file, { cacheControl: "3600", upsert: false });

        if (error) {
          console.error("Upload error:", error);
          throw error;
        }

        const { data: urlData } = supabase.storage.from("images").getPublicUrl(filePath);
        imageUrl = urlData.publicUrl;
      }

      const { error } = await supabase.from("tributes").insert([
        { author_name: sanitizedAuthor, message: sanitizedMessage, imageUrl },
      ]);

      if (error) {
        console.error("Database error:", error);
        throw error;
      }

      toast.success("You just signed the guest book");
      setForm({ author_name: "", message: "" });
      setFile(null);
      fetchTributes();

      if (firstTributeRef.current) {
        window.scrollTo({
          top: firstTributeRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.error("Error submitting tribute:", error);
      toast.error("Failed to submit tribute");
    } finally {
      setSubmitting(false);
    }
  }

  const handleCommentFormChange = (tributeId, field, value) => {
    setCommentForms((prev) => ({
      ...prev,
      [tributeId]: {
        ...prev[tributeId],
        [field]: value,
      },
    }));
  };

  const toggleCommentForm = (tributeId) => {
    setShowCommentForm((prev) => ({
      ...prev,
      [tributeId]: !prev[tributeId],
    }));
  };

  const addComment = async (tributeId) => {
    const commentForm = commentForms[tributeId];

    if (!commentForm.author_name || !commentForm.message) {
      toast.error("Please fill in all comment fields");
      return;
    }

    const sanitizedCommentAuthor = DOMPurify.sanitize(commentForm.author_name);
    const sanitizedCommentMessage = DOMPurify.sanitize(commentForm.message);

    try {
      const { error } = await supabase.from("comments").insert([
        {
          tribute_id: tributeId,
          author_name: sanitizedCommentAuthor,
          message: sanitizedCommentMessage,
        },
      ]);

      if (error) throw error;

      const { data: updatedComments, error: fetchError } = await supabase
        .from("comments")
        .select("*")
        .eq("tribute_id", tributeId)
        .order("created_at", { ascending: true });

      if (fetchError) throw fetchError;

      setComments((prev) => ({
        ...prev,
        [tributeId]: updatedComments || [],
      }));

      setCommentForms((prev) => ({
        ...prev,
        [tributeId]: { author_name: "", message: "" },
      }));
      setShowCommentForm((prev) => ({
        ...prev,
        [tributeId]: false,
      }));

      toast.success("Comment added successfully");
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Failed to add comment");
    }
  };

  // New function to handle multi-reaction feature
  const handleReaction = (tributeId, reactionType) => {
    setReactions((prev) => {
      const currentReactions = prev[tributeId] || {
        like: 0,
        love: 0,
        sad: 0,
        haha: 0,
        wow: 0,
      };
      return {
        ...prev,
        [tributeId]: {
          ...currentReactions,
          [reactionType]: currentReactions[reactionType] + 1,
        },
      };
    });
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Last Respect</h1>

      <div className="space-y-6 flex-grow">
        {loading ? (
          <div className="text-center text-gray-300">Loading tributes...</div>
        ) : tributes.length > 0 ? (
          tributes.map((tribute, index) => (
            <div
              key={tribute.id}
              ref={index === 0 ? firstTributeRef : null}
              className="bg-funeral-darkest border border-funeral-dark rounded-lg shadow-lg p-6"
            >
              {tribute.imageUrl && (
                <img
                  src={tribute.imageUrl}
                  alt="Tribute"
                  className="w-full h-auto mb-4 rounded-lg object-cover border border-funeral-dark"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yNCAxMmMwIDYuNjIzLTUuMzc3IDEyLTEyIDEycy0xMi01LjM3Ny0xMi0xMiA1LjM3Ny0xMiAxMi0xMiAxMiA1LjM3NyAxMiAxMnptLTEgMGMwIDYuMDcxLTQuOTI5IDExLTExIDExcy0xMS00LjkyOS0xMS0xMSA0LjkyOS0xMSAxMS0xMSAxMSA0LjkyOSAxMSAxMXptLTExLjUgNC4wMDFoMXYtOC4wMDJoLTF2OC4wMDJ6bS0xLjE2Ni0xMS4wMDFjMC0uNTUyLjQ0OC0xIDEtMSAuNTUzIDAgMSAuNDQ4IDEgMSAwIC41NTMtLjQ0NyAxLTEgMS0uNTUyIDAtMS0uNDQ3LTEtMXoiLz48L3N2Zz4=";
                    e.target.className =
                      "w-full h-auto mb-4 rounded-lg object-contain p-4 border border-funeral-dark";
                  }}
                />
              )}
              <p className="text-gray-300 mb-4">{tribute.message}</p>
              <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-2 text-white text-xs font-medium"
                    style={{ backgroundColor: getProfileColor(tribute.author_name) }}
                  >
                    {getInitials(tribute.author_name)}
                  </div>
                  <span>- {tribute.author_name}</span>
                </div>
                <span>{new Date(tribute.created_at).toLocaleDateString()}</span>
              </div>

              {/* Multi-Reaction Section */}
              <div className="flex items-center space-x-4 mt-2">
                {availableReactions.map((reaction) => (
                  <button
                    key={reaction.type}
                    onClick={() => handleReaction(tribute.id, reaction.type)}
                    className="flex items-center space-x-1 text-xl"
                  >
                    <span>{reaction.icon}</span>
                    <span className="text-xs text-gray-300">
                      {(reactions[tribute.id] && reactions[tribute.id][reaction.type]) || 0}
                    </span>
                  </button>
                ))}
              </div>

              {/* Comments section */}
              <div className="mt-4 border-t border-funeral-dark pt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-300">
                    Comments ({(comments[tribute.id] || []).length})
                  </h3>
                  <button
                    onClick={() => toggleCommentForm(tribute.id)}
                    className="text-sm text-funeral-accent hover:text-funeral-medium transition-colors"
                  >
                    {showCommentForm[tribute.id] ? "Cancel" : "Add Comment"}
                  </button>
                </div>

                {/* Comment form */}
                {showCommentForm[tribute.id] && (
                  <div className="bg-[#0a0707] rounded p-3 mb-3 border border-funeral-dark">
                    <div className="mb-2">
                      <label
                        htmlFor={`comment-name-${tribute.id}`}
                        className="block text-xs font-medium text-gray-300 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id={`comment-name-${tribute.id}`}
                        value={commentForms[tribute.id]?.author_name || ""}
                        onChange={(e) =>
                          handleCommentFormChange(
                            tribute.id,
                            "author_name",
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 bg-gray-100 border border-funeral-dark text-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-funeral-accent text-sm"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor={`comment-message-${tribute.id}`}
                        className="block text-xs font-medium text-gray-300 mb-1"
                      >
                        Your Comment
                      </label>
                      <textarea
                        id={`comment-message-${tribute.id}`}
                        value={commentForms[tribute.id]?.message || ""}
                        onChange={(e) =>
                          handleCommentFormChange(
                            tribute.id,
                            "message",
                            e.target.value
                          )
                        }
                        rows={2}
                        className="w-full px-2 py-1 bg-gray-100 border border-funeral-dark text-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-funeral-accent text-sm"
                        required
                      />
                    </div>
                    <button
                      onClick={() => addComment(tribute.id)}
                      className="w-full bg-funeral-dark text-white py-1 px-3 rounded-md hover:bg-funeral-medium focus:outline-none focus:ring-1 focus:ring-funeral-accent text-sm transition-colors"
                    >
                      Post Comment
                    </button>
                  </div>
                )}

                {/* Comments list */}
                <div className="space-y-2">
                  {(comments[tribute.id] || []).length > 0 ? (
                    (comments[tribute.id] || []).map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-[#0a0707] p-3 rounded border-l-2 border-funeral-medium"
                      >
                        <p className="text-gray-300 text-sm mb-1">
                          {comment.message}
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <div className="flex items-center">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center mr-1 text-white text-xs font-medium"
                              style={{
                                backgroundColor: getProfileColor(
                                  comment.author_name
                                ),
                              }}
                            >
                              {getInitials(comment.author_name)}
                            </div>
                            <span>- {comment.author_name}</span>
                          </div>
                          <span>
                            {new Date(comment.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-xs italic">
                      No comments yet
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-300">No tributes yet.</div>
        )}
      </div>

      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Pay Your Last Respect
      </h1>

      {/* Form at the bottom */}
      <form
        ref={formRef} // Reference to the form
        onSubmit={handleSubmit}
        className="bg-funeral-darkest border border-funeral-dark rounded-lg shadow-lg p-6 mb-8 mt-8"
      >
        <h2 className="text-xl font-bold text-white mb-4">Leave a Memory</h2>

        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-funeral-dark flex items-center justify-center mr-3 text-white">
            {form.author_name ? getInitials(form.author_name) : (
              <img src={defaultIcon} alt="Default Icon" className="inline-block w-8 h-8" />
            )}
          </div>
          <div className="flex-1">
            <label
              htmlFor="author_name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="author_name"
              value={form.author_name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, author_name: e.target.value }))
              }
              className="w-full px-3 py-2 bg-gray-100 border border-funeral-dark text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-funeral-accent"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            rows={4}
            className="w-full px-3 py-2 bg-gray-100 border border-funeral-dark text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-funeral-accent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Upload Image (Optional)
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-gray-300 bg-funeral-darkest border border-funeral-dark rounded p-2"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-funeral-accent text-white py-2 px-4 rounded-md hover:bg-funeral-medium focus:outline-none focus:ring-2 focus:ring-funeral-accent focus:ring-offset-2 focus:ring-offset-funeral-darkest disabled:opacity-50 transition-colors"
        >
          {submitting ? "Submitting..." : "Post"}
        </button>
      </form>
    </div>
  );
}

export default Guestbook;
