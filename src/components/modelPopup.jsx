// src/components/modelPopup.jsx
import React from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    // Overlay: Clicking outside closes the modal
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal content: Stops click propagation */}
      <div 
        className="bg-funeral-darkest text-white p-6 rounded-lg max-w-2xl w-full shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <div className="p-2">
          <p className="text-lg leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
        <div className="flex text-lg justify-end mt-4">
          <button
            className="px-4 py-2 bg-funeral-accent text-white rounded-lg hover:bg-opacity-80"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
