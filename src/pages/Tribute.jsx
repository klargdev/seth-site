// src/pages/Tribute.jsx
import React, { useState } from "react";
import { FlowerCornerSvg, FlowerDividerSvg } from "../svgs.jsx";
import Modal from "../components/modelPopup.jsx"; // Import default export

// Flower Corner Decoration Component
const FlowerCorner = ({ className }) => (
  <div className={className}>
    <FlowerCornerSvg />
  </div>
);

// Flower Divider Component
const FlowerDivider = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-px bg-funeral-medium w-16 md:w-24"></div>
    <div className="mx-3 text-funeral-accent">
      <FlowerDividerSvg />
    </div>
    <div className="h-px bg-funeral-medium w-16 md:w-24"></div>
  </div>
);

const Tribute = () => {
  // State for controlling the modal
  const [selectedTribute, setSelectedTribute] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tributes array with separate teaser and full content for each topic
  const tributes = [
   {
      title: "TRIBUTE BY WIFE",
      teaser: `2 Timothy 4:7
“I have fought the good fight, I have finished the race, I have kept the faith”.....`,
      fullContent: `TRIBUTE BY WIFE

2 Timothy 4:7
“I have fought the good fight, I have finished the race, I have kept the faith”
It is well with my soul, but my heart is heavy. I cannot believe that your sun has already set and that this is indeed my parting words with you. I have no words to express the life we shared, the love we built, or the sorrow I feel. Wizzy, as I affectionately called him, was not just my husband, I always said that he was my shadow, my confidant, my best friend, the greatest man I know. Mawu neyra wo, nye fiaf3 o
You were a kind and loving man, a well-balanced human, and a level-headed father and husband who knew when and where to draw the line between being a friend and a disciplinarian. You were straightforward, never the one to sugarcoat things, yet your heart was full of warmth and love. 
Your resilience over the years amazed me. You faced life’s storms with courage, always thinking outside the box, and you, my husband, always found a way no matter the situation, except this one. Though we had our challenges as every couple, your determination helped us to build something beautiful that words cannot truly capture. I always thought I would go first because you would have had better courage to deal with the situation, but the twists and turns of life had other plans. 
The reality of your demise is something that I cannot deal with so I have told myself that you have gone on a journey, like you did before, but that this one would be rather longer. As you lay on your sick bed, your devoted wife, together with family, your church, and friends did everything humanly possible to keep you with us. You fought valiantly till the very end, a testament to your unyielding spirit and strength but God’s will prevailed. 
Now, I walk this path alone, holding onto the love and strength you left behind. Wherever you are, I hope you are safe. I hope and pray you will be my guardian angel; I pray you give me the strength to continue this lifelong journey and when my time comes, I hope you have prepared a special place beside you for me so we can be together once more. 
May the Lord receive you and keep you in his eternal peace. Thank you for loving me, thank you for standing by me and living with me. Most of all, thank you for being the man that you were. Dzidz) le nutifafa me. It is well with my soul.
`
    },

  {
      title: "In-laws",
      teaser:"It is with a heavy heart that we write this tribute to honour the life of our beloved brother-in-law.....",
      fullContent: `It is with a heavy heart that we write this tribute to honour the life of our beloved brother-in-law, Torgby affectionately called Mr Tee by the three wise men. Though he is no longer with us, his memory remains deeply engraved in our hearts.

Torgby was more than just a brother-in-law; he was a brother, a friend, and a source of unwavering support. His kindness, generosity, and infectious laughter touched the lives of everyone who had the privilege of knowing him. Whether it was through his wise words, his comforting presence, or his ability to light up a room, he made the world a better place.

He was a pillar of strength, always putting family first, offering a helping hand without hesitation, and spreading love wherever he went. His wisdom and warmth will forever be cherished, and though he may be gone, his legacy of love and kindness will live on in all of us.

Though our hearts ache with his absence, we find solace in the beautiful memories we shared and the impact he left on our lives. We will carry his spirit forward, honouring him in the way we live, love, and support one another—just as he always did.

Rest in peace, dear Torgby.
 You will always be loved, missed, and remembered.`
    },

    {
      title: "TRIBUTE BY CHILDREN",
      teaser: "A great tree has fallen, but its roots remain in our hearts.....",
      fullContent: `TRIBUTE BY CHILDREN

"A great tree has fallen, but its roots remain in our hearts."

Penning these words truly breaks our hearts. Your passing has left a deep void, one that may never be filled.
But through our grief, all we can say is thank you.
Thank you for the opportunities you gave us.
Thank you for being our biggest supporter, always cheering us on.
Thank you for correcting us when we went astray.
Thank you for playing an incredible fatherly role in our lives.
Thank you for your endless encouragement and wise advice.
Thank you for the tender care and love you showed us.
We know you fought tirelessly, and we are proud of the strength you showed. We only hope that wherever you are now, there is no more pain, only peace, safety, and true happiness.
The sun has set, but its warmth will forever be felt.
Please watch over us, be our guardian angel, and give us the strength to be better people.

Akpe! Mawu neyra wo, Rest peacefully in happiness, our beloved Dada.
`
    },
    
    
    {
      title: "TRIBUTE – MANAGEMENT AND STAFF OF ACCRA TECHNICAL UNIVERSITY",
      teaser: "For all flesh is as grass, and all the glory of men as the flower of grass.  The grass withereth and the flower thereof falleth....",
      fullContent: `TRIBUTE – MANAGEMENT AND STAFF OF ACCRA TECHNICAL UNIVERSITY
THE LATE MR. WISDOM KWAWU TORGBY

For all flesh is as grass, and all the glory of men as the flower of grass. 
The grass withereth and the flower thereof falleth away: 25” But the word of the Lord endureth forever.” 1 peter 1:24-25 
With deep sorrow, we pay tribute to Mr. Wisdom Kwawu Torgby, a dedicated academic, mentor, and leader. His passing has left a great void, especially in the Computer Science Department of Accra Technical University (formerly Accra Polytechnic), where he served faithfully for twenty-seven (27) years.
Mr. Torgby joined the institution on 7th December 1998 as a Computer Laboratory Assistant. After earning his Master of Science Degree in Information Technology, he was promoted to Lecturer in 2009 and later to Senior Lecturer in 2013. Through hard work and dedication, he became the Head of the Computer Science Department until his passing.
A Life of Dedication and Impact
Mr. Torgby made numerous contributions to the institution, including:
Serving as Head of the Computer Science Department from 2017 to 2019 and again in July 2022.
Representing the Ag. Vice-Chancellor at the launch of The Ten Commandments for Sustainable National Cybersecurity Development—Africa in Perspective.
Participating as an Exhibitor at the TVET Symposium, showcasing his passion for education.
Serving as a Fact-Finding Committee Member.
Being a member of the Programme Advisory Committee of the Computer Science Department.
Contributing as a member of an Investigative Committee.
Supporting students as an Academic Counselor.
Chairing the Committee that developed the Competency-Based Training Syllabus for the B-Tech Computer Science Programme.
Acting as an Internal Resource Person for the Virtual Internship Programme.
A Legacy That Lives On
Mr. Torgby was more than a teacher; he was a mentor, a guide, and an inspiration. His kindness, dedication, and commitment to education will always be remembered.
Though he is gone, his legacy will continue to inspire many. His contributions to the Computer Science Department and the institution will never be forgotten.
May his soul rest in perfect peace.
Farewell, our beloved mentor and leader.
`
    },

   
    {
      title: "Tribute - The Church of Jesus Christ of Latter-Day Saints",
      teaser: "With hearts full of sorrow yet gratitude, we honor the life and service of.....",
      fullContent: `Tribute to Wisdom Kwawu Torgby
With hearts full of sorrow yet gratitude, we honor the life and service of Wisdom Kwawu 
Torgby, a man of unwavering faith, compassion, and dedication to The Church of Jesus Christ 
of Latter-day Saints in Accra, Ghana Tesano Stake.
Brother Torgby was baptized into the Church on March 11, 1989, ordained an Elder on May 5, 
1991, and later a High Priest on October 21, 2001. Throughout his life, he served in various 
leadership roles. He served in the stake presidency as the 2
nd counselor to the stake president 
and currently serving as the 1
st counselor before his depart. He served with diligence and 
resilience. 
His passion for self-reliance and entrepreneurship was a blessing to many. He guided 
numerous members in establishing their micro-businesses, overseeing initiatives in fish 
farming, poultry, snail rearing, and many more. As a leader in the Stake Self-Reliance 
Program, he was instrumental in helping others become independent and self-sustaining.
Brother Torgby’s presence at church meetings was constant and impactful. He not only 
attended but contributed meaningfully, ensuring that everyone was carried along in discussions. 
His insightful talks, inspiring testimonies, and ability to uplift others made him a pillar in the 
Church community.
When he was unexpectedly absent from our monthly meetings, we were concerned, for we 
knew Brother Torgby as someone who, even in illness, would attend church and meetings, 
contribute, and then quietly excuse himself. We prayed for him, visited him at home, and 
hoped to see him return to continue his service to the Lord. Little did we know that our 
Heavenly Father was calling him home to rest.
His departure has left a void in our hearts and in the Church. The aged will miss his afterservice engagements, the youth will miss their fatherly mentor, and the single adults will 
miss his wise marriage counsel. Sundays will no longer be the same without his beautiful talks 
and testimonies, which always stirred our spirits.
Brother Torgby, you raised the bar of service, setting an example for us all. We will forever 
miss you, but we take solace in the knowledge that you have fought the good fight, finished your 
course, and kept the faith.
Rest in the Lord’s peace until we meet again.
`
    },
 
  
    {
      title: "Staff of Ayao Medical Center",
      teaser: "We have gathered here today to celebrate the life of a remarkable leader, Boss Wisdom, as we affectionately called him. He was.....",
      fullContent: `Tribute to Boss Wisdom
We have gathered here today to celebrate the life of a remarkable leader, Boss Wisdom, as we affectionately called him. He was more than just a boss — he was a mentor and a father figure to us all. His unwavering positivity and dedication to the clinic’s success inspired us to strive for excellence in our work.
Boss Wisdom always prioritized the well-being of both the staff and the facility. He created an environment where we felt valued, respected, and encouraged to share our ideas on how to improve and contribute to the clinic’s growth.
I vividly remember moments when he would take the time to reach out to us individually, asking about the challenges we faced and seeking our input on how to overcome them as a team.
He often reminded us that “we are a family, a team,” and that he and his brother were fully committed to our collective growth.
As a devoted Christian, Boss Wisdom encouraged us to pray for ourselves, our team, and the clinic’s progress.
On one occasion, he even visited the clinic to pray for each unit and urged us to do the same for our respective teams.
Oh, our beloved father and boss,
We fondly remember the days when he would visit the clinic for supervision. Upon noticing a patient struggling to pay for their medical expenses, he would generously step in, settling their bills and bringing smiles and renewed hope to their faces.
His passing has left a profound void in our hearts, but we take comfort in the memories we shared, the invaluable lessons we learned from him, and the lasting legacy he leaves behind.
Our thoughts and prayers are also with Boss Wisdom’s family during this difficult time. May you find strength and comfort in the cherished memories you hold with him.
Rest in peace, Boss Wisdom. You will be deeply missed, and your memory will forever be etched in our hearts.`
    },

    
   /* {
      title: "Church",
      teaser: "A brief summary of the Church tribute.",
      fullContent: "This is the full content for Church tribute..."
    },
    */

   {
      title: "A TRIBUTE BY THE COMPUTER SCIENCE DEPARTMENT, ACCRA TECHNICAL UNIVERSITY",
      teaser: "With great honor and deep admiration, we celebrate the life and contributions of Mr. Wisdom Torgby, our esteemed colleague and Head of....",
      fullContent: `
        A TRIBUTE BY THE COMPUTER SCIENCE DEPARTMENT, ACCRA TECHNICAL UNIVERSITY

With great honor and deep admiration, we celebrate the life and contributions of Mr. Wisdom Torgby, our esteemed colleague and Head of the Computer Science Department, Accra Technical University (ATU). His unwavering dedication, vast knowledge, and relentless pursuit of excellence have left an indelible mark on the department, the countless students he nurtured, and ATU.

Mr. Torgby was not just a leader but also a teacher, mentor, and visionary. Under his guidance, the Department flourished, embracing technological and academic programme advancements, which fostered an environment of innovation and critical thinking. His commitment to academic excellence and professional integrity was evident in everything he did, inspiring colleagues and students.

Beyond his academic contributions, Mr. Torgby was a man of great character—kind, approachable, and always willing to lend a helping hand. He believed in nurturing the potential of every student, encouraging them to explore, innovate, and achieve beyond their expectations. His words of wisdom, which coincidentally happens to be his first name, will continue to resonate within the walls of our Department and ATU.

As we honor this remarkable individual, we acknowledge that his legacy transcends the classroom. His influence will continue to shape the future of computer science and the lives of all those fortunate enough to have known him. We express our deepest gratitude for his invaluable service and unwavering dedication, and we cherish his memory with the utmost respect.

Death has taken away a genuinely warm individual, more importantly a loving husband and father and deprived so many others, including us all, of a good friend, brother and colleague. Our thoughts and prayers are with you and your family during this difficult time.

Rest in Peace, Mr. Wisdom Kwawu Torgby. 
Your impact will never be forgotten.

Rest Well Comrade
`
    },

    {
      title: "Tribute from COMPSSA",
      teaser: "It is with great sadness and a heavy heart that we the students in the Computer Science Department pay our....",
      fullContent: `It is with great sadness and a heavy heart that we the students in the Computer Science Department pay our tribute to our late Head of Department — a mentor, a leader, and a true inspiration to us all.

Sir, your passing is a tremendous loss, not just to this department, but to the entire academic community. You led with vision, compassion, and an unwavering commitment to excellence. Under your guidance, the Computer Science Department grew stronger — not just in academic achievements, but as a family bound by unity and a shared passion for knowledge.

You were more than a Head of Department to us. You were a father figure, a counselor, and a friend. You believed in the potential of every student and staff member, constantly pushing us to rise above challenges and strive for greatness. Your legacy is not just in the projects completed or the programs launched, but in the countless lives you’ve touched and transformed.

We promise to uphold the values you stood for;  hard work, integrity, and service to humankind. Though you are no longer with us in person, your dreams for this department will live on.

Rest well, Sir. You will be forever remembered and deeply missed.

Stephen Boison
President, Computer Science Students Association (COMPSSA)
      ` },
    
   /*  {
      title: "Goal Getters Club",
      teaser: "A brief summary of the Goal Getters tribute.",
      fullContent: "This is the full content for Goal Getters tribute..."
    },
    */

    {
      title: "TRIBUTE BY TECHNICAL UNIVERSITY TEACHERS ASSOCIATION OF GHANA TUTAG (ATU-CHAPTER)",
      teaser: "It is with deep sorrow and a heavy heart that we, the members of TUTAG, pay tribute to our dear comrade and colleague Mr Wisdom Kwaku Torgby...",
      fullContent:`TRIBUTE BY TECHNICAL UNIVERSITY TEACHERS ASSOCIATION OF GHANA TUTAG (ATU-CHAPTER)

It is with deep sorrow and a heavy heart that we, the members of TUTAG, pay tribute to our dear comrade and colleague Mr Wisdom Kwaku Torgby, who was not only a dedicated member of our union but also the esteemed Head of the Department of Computer Science. His sudden departure has left a void that will be difficult to fill, but his legacy of commitment, diligence, and service will forever remain in our hearts.

Comrade Torgby was a true embodiment of hard work, dedication, and integrity. As a staunch advocate for the welfare of staff and students, he played a pivotal role in shaping policies, promoting fairness, and ensuring that the voices of his colleagues were heard. His unwavering commitment to the union was evident in his active participation in discussions, negotiations, and initiatives aimed at improving working conditions for all.

Beyond his union engagements, Mr. Wisdom Kwaku Torgby was a visionary leader in the fields of Computer Science and Information Technology. Under his leadership, the Computer Science Department experienced remarkable growth, fostering innovation, modernizing systems, and ensuring that technology played a crucial role in the development of our institution. His dedication to his students and colleagues was truly inspiring, as he tirelessly worked to ensure that knowledge was shared, systems were improved, and opportunities were created for all.

We will forever remember his warm personality, his ability to bring people together, and his passion for excellence. His contributions to both the union and the institution will continue to inspire us to strive for unity, fairness, and progress.
As we mourn this great loss, we extend our heartfelt condolences to his family, friends, colleagues, and all who had the privilege of knowing him. May his soul find eternal rest, and may we honor his memory by upholding the values he so passionately stood for.

Rest in Peace, Comrade Your legacy lives on.
In Solidarity,
Hanson Obiri Yeboah
On behalf of TUTAG

`
    },
  {
      title: "Rowland Damisa(Friend & Colleague)",
      teaser: "Life has a way of bringing people together in the most unexpected yet beautiful ways. When I met....",
      fullContent: `Life has a way of bringing people together in the most unexpected yet beautiful ways. When I met Mr. Wisdom Torgby during our MSc studies in the UK, I never imagined that our bond would grow into a deep and lasting friendship. Though I am Nigerian and he was Ghanaian, our connection transcended borders. We shared dreams, ambitions, and a vision for the future that kept us united, even when distance separated us.

Wisdom was more than just a friend—he was a brother, a confidant, and a true inspiration. His humility and cheerful nature made him stand out in every room he entered. He carried himself with grace, always ready to offer a helping hand or share a word of encouragement. No matter the challenges life threw at us, he remained optimistic, reminding me that great things lay ahead.

Even after he returned to Ghana to continue his lecturing career, our friendship never faded. We planned businesses together, envisioned a future where we could make a difference, and supported each other’s aspirations. His passion for knowledge and growth was contagious, and his dedication to his work and loved ones was unwavering.

Losing Wisdom so suddenly is a pain that words cannot fully express. The world has lost a brilliant mind, a kind soul, and a man of great character. But I choose to remember him not with sorrow, but with gratitude—for the moments we shared, the lessons he taught me, and the dreams he left behind.

Rest well, my dear friend. Your legacy lives on in the hearts of those you touched. Though you are gone too soon, your impact will never fade. Till we meet again .RIP bro 😭
Rowland Damisa
`
 }
  ];


  const openModal = (title, fullContent) => {
    setSelectedTribute({ title, fullContent });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTribute(null);
  };

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Top corner decorations */}
      <FlowerCorner className="absolute top-0 left-0 w-20 h-20 text-funeral-accent transform -translate-x-1/4 -translate-y-1/4 hidden md:block" />
      <FlowerCorner className="absolute top-0 right-0 w-20 h-20 text-funeral-accent transform translate-x-1/4 -translate-y-1/4 rotate-90 hidden md:block" />

      <div className="relative">
        {/* Biography Section */}
        <h1 className="text-4xl font-bold mb-4 text-white text-center">BIOGRAPHY OF THE LATE WISDOM KWAWU TORGBY</h1>
        <FlowerDivider />
        <p
          className="text-gray-300 text-lg mb-6 leading-loose cursor-pointer hover:text-white"
          onDoubleClick={() =>
            openModal( `BIOGRAPHY OF THE LATE WISDOM KWAWU TORGBY
Wisdom Kwawu Torgby was born on 29th September 1966 to Mr. Richard Tetteh Torgby and Madam Victoria Ayao Agbemava (deceased).
Education: The late Wisdom Kwawu Torgby started his basic education at Wiawso Road LA Primary School in Takoradi. He was in class four (4) when his father and family relocated to Madina. While at Madina, he briefly attended Calvary International School before continuing at Madina District Council One Primary and Middle School where he completed in 1982.
After writing the Common Entrance Examination and completing the Middle School Leaving Certificate Examination, Wisdom was admitted to Kaneshie Secondary Technical School (KATECO) to further his education for the Ordinary General Certificate Examination (GCE ‘O’ Level). Due to lack of boarding facilities at KATECO, he sought a transfer to Anlo Secondary School (ANSECO) after a year’s academic work at KATECO. At ANSECO, He studied General Arts with subjects like Literature, Government, Geography, and Economics. Wisdom became the Entertainment Prefect for his year group and was affectionately called ‘Sebe Allah’ by many friends and students.
After obtaining his GCE Ordinary Level Certificate, Wisdom enrolled at Graduate Management School from September 1993 to February 1996 where he obtained the Advanced Diploma in Computer Science awarded by the Association of Computer Professionals-(ACP), United Kingdom. Recognizing the need for further education to enhance his expertise, he later obtained a Master of Science in Information Technology from De Montfort University, Leicester, UK.
Career and professional life, Wisdom dedicated his entire professional life to the Computer Science Department of Accra Technical University (formerly Accra Polytechnic). He started as a Computer Laboratory Assistant/Instructor and rose through the ranks to become a Senior Lecturer. Throughout his tenure, he held various leadership positions, including Head of the Computer Science Department, a position he held until his sudden demise. His contributions to national development through academia and mentorship were profound, leaving a lasting impact on Accra Technical University (ATU) as attested by colleagues, students, and many others he influenced, touched and impacted.
Political life: As a proud platinum member of the National Democratic Congress, Wisdom Kwawu Torgby played his part in the political development of Ghana under the 4th Republic. He served as an organizer of the party in the Madina Constituency, he contested and won The Vice Chairmanship position and proceeded to become The Chairman of the NDC Madina Constituency. Prior to his demise, Wisdom served as The Director of Elections of the Madina Constituency. The NDC at the Branch, Ward, Constituency, Regional, and National levels know his contributions and the “behind the scenes” roles he played in the 2024 election victory.
Religious life: Wisdom was deeply passionate about his faith; after completing secondary school, he joined The Church of Jesus Christ of Latter-Day Saints (LDS) through missionaries in Madina, where he studied and embraced the faith. He later embarked on missionary assignments and served in various capacities within the church. Between 2002 and 2004, he was the Manager of the Latter-Day Saints Computer Training Centre, overseeing the center’s operations, teaching programs, and training numerous ICT personnel for different companies, including Affiliated Computer Services, an offshore company where he single-handedly trained over 1,500 students in medical coding for engagement by the company. In the LDS church he held various leadership and Priesthood positions, most recently he was the First Counsellor to the Tesano Stake Presidency. In addition, he provided consultancy services in ICT to several organizations, including GIZ and the Libya Culture Centre. 
Entrepreneurial activities: Wisdom was the Board Chairman of ADE PLUS Company Ltd, an entity that deals with the supply of medical laboratory equipment and reagents. He was also the Chairman of Ayao Health Foundation, operator of the Ayao Medical Centre, Teiman, and Chairman of Impact Self Reliant an NGO he established to support the economic self-resilience of its members. Through this effort, a lot of people were able to access credit to run their successful businesses and become economically empowered. He was also the Chief Executive Officer, Redfields Company Limited and defunct WizLiz Company Ltd. Wisdom was also the Patron of the Goal Getters Club, an NGO that seeks to train the youth and other vulnerable groups in Agric and Agri-Business related activities
Personal philosophies and attitudes: While other friends on study leave decided to abandon country and enjoy greener pastures in the UK and elsewhere, Wisdom for the patriot that he was returned to Ghana to contributes his quota to the development of his dear country. Wisdom was known for his generosity, often providing financial and emotional support to friends, going the extra mile to assist people, and even providing accommodation to those in need. He would often deny himself personal comfort just to be able to give his “bottom dollar” to someone.  His affability, caring, fairness, and altruistic nature endeared him to many, making him a loved figure among his family, friends, colleagues, students, church community, and the NDC Madina Constituency. Indeed, Wisdom was extremely kind to a fault. His was service to God and mankind.
As common with human society, some of the very people he helped mentored, inspired, took advantage of his calm and trusting nature and hurt him in various ways. As if it was a calling, he soldiered on with life and was ready to be called upon when needed. 
Colleagues, lecturers and workers at ATU he inspired, Church members, the NDC party fraternity, friends (fair weather ones included), and students he financially supported and accommodated, mentored, and inspired to greater heights would always have very fond memories of him.
Wisdom Kwawu Torgby was taken ill all of a sudden and he sought treatment at the nation's premier health facility, the Korle Bu Teaching Hospital. As fate would have it, death laid its icy hands-on Wisdom Kwawu Torgby while at Korle Bu on that fateful day of 16th January, 2025.
A fiery, fierce but meek, humble, peaceful, calm, trusting, kindred and a benevolent spirit he was.! His broad and soothing smile would be sorely missed. A big void has been etched in our hearts and minds forever.  
For both the nuclear and extended families, friends who became more family than friends, his acolytes, NDC Madina Constituency, Goal Getters Club, and to ATU students both current and old, a “Great Tree” has fallen. 
Efo Kwawu, Bro Wisdom, Bra Tee, Wissy, Capacity, Capa!
 “He de nyue!  Dzudzo le nyuti fafa me”!,  “Damirifa due”!, “ Yaa Wor Ojogbann”!,  “Fare thee well”!  
                                                Adios! Adios! Adios!
 
`)
          } 
         
        >
        <p className="text-gray-300 text-lg mb-6 leading-loose cursor-pointer hover:text-white"  >

         {`Wisdom Kwawu Torgby was born on September 29, 1966, to Mr. Richard Tetteh Torgby and Madam Victoria Ayao Agbemava...`}
      
    </p>
    </p>
        
        {/* Tributes Section */}
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Tributes</h1>
        <FlowerDivider />
        {tributes.map((tribute, index) => (
          <div
            key={index}
            className="p-6 bg-funeral-darkest bg-opacity-50 border-l-4 border-funeral-accent rounded-r-lg mb-8 relative cursor-pointer hover:bg-opacity-70"
            onDoubleClick={() => openModal(tribute.title, tribute.fullContent)}
          >
            {/* Small decorative flower at the top left */}
            <div className="absolute -top-3 -left-3 text-funeral-accent">
              <FlowerDividerSvg className="w-6 h-6" />
            </div>
            {/* Card Title */}
            <h2 className="text-3xl font-bold mb-4 text-white">{tribute.title}</h2>
            {/* Teaser content for the card */}
            <p className="text-gray-300 text-xl mb-0 leading-loose">
              {tribute.teaser}
            </p>
            {/* Indicator to show that full content is available */}
            <div className="absolute bottom-2 right-2 text-xs text-white bg-funeral-accent px-2 py-1 rounded-md shadow-md animate-pulse">
  Double-click to view full content
</div>


          </div>
        ))}
      </div>

      {/* Bottom corner decorations */}
      <FlowerCorner className="absolute bottom-0 left-0 w-20 h-20 text-funeral-accent transform -translate-x-1/4 translate-y-1/4 -rotate-90 hidden md:block" />
      <FlowerCorner className="absolute bottom-0 right-0 w-20 h-20 text-funeral-accent transform translate-x-1/4 translate-y-1/4 rotate-180 hidden md:block" />

      {/* Popup Modal: Displays the full content when a section is double-clicked */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedTribute?.title}
          content={selectedTribute?.fullContent}
        />
      )}
    </div>
  );
};

export default Tribute ;
