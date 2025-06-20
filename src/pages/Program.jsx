import React from 'react';
import mapicon from '../assets/images/png/map.png'; // Ensure the path is correct

function Program() {
  const schedule = [
    {
      time: '8:00 PM - 12:00 AM',
      event: 'Friday, 21st March 2025 - Family Vigil',
      location: 'The Family House, East Legon',
      mapLink: `https://www.google.com/maps/place/5%C2%B039'21.5%22N+0%C2%B009'18.3%22W/@5.655972,-0.1576445,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.655972!4d-0.1550696?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoASAFQAw%3D%3D`,
    },
    {
      time: '4:00 AM - 8:00 AM',
      event: 'Saturday, 22nd March 2025 - Laying in State',
      location: 'The Family House, East Legon',
      mapLink: `https://www.google.com/maps/place/5%C2%B039'21.5%22N+0%C2%B009'18.3%22W/@5.655972,-0.1576445,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.655972!4d-0.1550696?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoASAFQAw%3D%3D`,
    },
    {
      time: '',
      event: 'Interment',
      extraDetails: '⚠️ The final funeral ceremony and family gathering will follow immediately after the interment.',
      location: 'The Family House, East Legon',
      mapLink: `https://www.google.com/maps/place/5%C2%B039'21.5%22N+0%C2%B009'18.3%22W/@5.655972,-0.1576445,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.655972!4d-0.1550696?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoASAFQAw%3D%3D`,
    },
    {
      time: '9:00 AM',
      event: 'Burial Service',
      location: 'The Church of Jesus Christ of Latter-Day Saints, Madina Stake Centre',
      mapLink: 'https://maps.google.com/?q=5.67214155197144,-0.169717341661453',
    },
  ];

  const hymn = {
    title: 'Hymns',
    sections: [
      {
        sectionTitle: 'Intermediate Hymn',
        hymns: [
          {
            title: 'How Firm a Foundation',
            verses: [
              `1. How firm a foundation, ye Saints of the Lord,  
Is laid for your faith in his excellent word!  
What more can he say than to you he hath said,  
Who unto the Savior, who unto the Savior,  
Who unto the Savior for refuge have fled?`,

              `2. In every condition—in sickness, in health,  
In poverty’s vale or abounding in wealth,  
At home or abroad, on the land or the sea—  
As thy days may demand, as thy days may demand,  
As thy days may demand, so thy succor shall be.`,

              `3. Fear not, I am with thee; oh, be not dismayed,  
For I am thy God and will still give thee aid.  
I’ll strengthen thee, help thee, and cause thee to stand,  
Upheld by my righteous, upheld by my righteous,  
Upheld by my righteous, omnipotent hand.`,

              `4. When through the deep waters I call thee to go,  
The rivers of sorrow shall not thee overflow,  
For I will be with thee, thy troubles to bless,  
And sanctify to thee, and sanctify to thee,  
And sanctify to thee thy deepest distress.`,

              `5. When through fiery trials thy pathway shall lie,  
My grace, all sufficient, shall be thy supply.  
The flame shall not hurt thee; I only design  
Thy dross to consume, thy dross to consume,  
Thy dross to consume and thy gold to refine.`,

              `6. Even down to old age, all my people shall prove  
My sovereign, eternal, unchangeable love;  
And then, when gray hair shall their temples adorn,  
Like lambs shall they still, like lambs shall they still,  
Like lambs shall they still in my bosom be borne?`,

              `7. The soul that on Jesus hath leaned for repose  
I will not, I cannot, desert to his foes;  
That soul, though all hell should endeavor to shake,  
I’ll never, no never, I’ll never, no never,  
I’ll never, no never, no never forsake!`,
            ],
          },
          {
            title: 'Be Still, My Soul',
            verses: [
              `1. Be still, my soul: The Lord is on thy side;  
With patience bear thy cross of grief or pain.  
Leave to thy God to order and provide;  
In every change he faithful will remain.  
Be still, my soul: Thy best, thy heavenly Friend  
Thru thorny ways leads to a joyful end.`,

              `2. Be still, my soul: Thy God doth undertake  
To guide the future as he has the past.  
Thy hope, thy confidence let nothing shake;  
All now mysterious shall be bright at last.  
Be still, my soul: The waves and winds still know  
His voice who ruled them while he dwelt below.`,

              `3. Be still, my soul: The hour is hastening on  
When we shall be forever with the Lord,  
When disappointment, grief, and fear are gone,  
Sorrow forgot, love’s purest joys restored.  
Be still, my soul: When change and tears are past,  
All safe and blessed we shall meet at last.`,
            ],
          },
        ],
      },
      {
        sectionTitle: 'Graveside Hymns',
        hymns: [
          {
            title: 'Swing Low, Sweet Chariot',
            verses: [
              `Swing low, sweet chariot,  
Coming for to carry me home.  
Swing low, sweet chariot,  
Coming for to carry me home.`,

              `I looked over Jordan and what did I see,  
Coming for to carry me home?  
A band of angels coming after me,  
Coming for to carry me home.`,

              `If you get there before I do,  
Coming for to carry me home,  
Tell all my friends I'm coming too,  
Coming for to carry me home.`,
            ],
          },
          {
            title: 'Near the Cross',
            verses: [
              `1. Jesus, keep me near the cross,  
There a precious fountain,  
Free to all, a healing stream,  
Flows from Calv'ry's mountain.`,

              `[Refrain:]  
In the cross, in the cross  
Be my glory ever,  
Till my ransomed soul shall find  
Rest beyond the river.`,

              `2. Near the cross, a trembling soul,  
Love and mercy found me;  
There the Bright and Morning Star  
Shed His beams around me.`,

              `3. Near the cross! O Lamb of God,  
Bring its scenes before me;  
Help me walk from day to day  
With its shadow o'er me.`,

              `4. Near the cross! I'll watch and wait,  
Hoping, trusting ever;  
Till I reach the golden strand,  
Just beyond the river.`,
            ],
          },
        ],
      },
      {
        sectionTitle: 'Closing Hymn',
        hymns: [
          {
            title: 'God Be with You Till We Meet Again',
            verses: [
              `1. God be with you till we meet again;  
By his counsel’s guide, uphold you;  
With his sheep securely fold you.  
God be with you till we meet again.`,
  
              `[Chorus:]  
Till we meet, till we meet,  
Till we meet at Jesus’ feet,  
Till we meet, till we meet,  
God be with you till we meet again.`,
  
              `2. God be with you till we meet again;  
When life’s perils thick confound you,  
Put his arms unfailing round you.  
God be with you till we meet again.`,
  
              `3. God be with you till we meet again;  
Keep love’s banner floating o’er you;  
Smite death’s threatening wave before you.  
God be with you till we meet again.`,
            ],
          },
        ],
      },
    ],
  };

  const mourners = {
    chiefMourner: `Evans Kwakutsey, Victor Kwashi Agbemava, Adjeibea Torgby, Richard Tetteh
Torgby, Robert Tettevi Torgby, Emmanuel Kofi Agbemava, Dr Ebenezer Harry Zevon, Madam
Rose Agbemava, Florence Aquila Equilia Agbemava, Justice Kwaku Agbemava (all for the Agbe-
mava family), Rev Victor Tsagli, Rev FFK Tsagli, Veronica Tsagli-Tuglo, Torgan Tsagli, Beauty
Tsagli, Mirriam Tsagli, Mibuhu Tay-Agbasa, Atsufi Tay Agbasa, Anloga, Madam Sarah Tordzro,
Ruby Korkor Torgby, Felicia Torgby (Prestea) Helena Korkor Torgby, Catherine Sikayena Torgby
and others.
`,
    wife: 'Elizabeth Serwaa Torgby',
    children: `Mr. John Doe Selasie Torgby-Tetteh, Afia Torgby-Tetteh, Jennifer Boakye, Albert Mensah Andrew
Mensah (Accra), Theodora Boakye, Anita Appiah, Jerome Asempa and Theophilus Manu.
`,
father:'Richard Tetteh Torgby',

mother:'Victoria Ayao Agbemava (deceased)',

brothersandsisters:` Wellington Torgby-Tetteh, Winfred Agbeko Torgby, Wilhemina Torgby
(deceased), Victoria Ami Norviegbor Torgby-Arhin, Wilberforce Kwame Torgby, Dede Mahongo
Torgby and Bright Agbaglo`,

inlaw:`Charlotte Torgby-Tetteh, Ruth Sakyiwa Torgby, Justice Kodjo Arhin, Rashida Torgby,
Kwabena Boateng, Kwame Boateng, Daniel Acheampong, Akua Afriyie, Benedicta Boateng,
Abraham Eghan, Ruth Akpene Sackitey, Thomas Agyeigah, Peter Thompson and others`,

nephewsandnieces:` Mawuena Afi Torgby, Kofi Selorm Torgby-Tetteh, Maama Yaa Nyarkoa
Arhin, Yewoe Kobina Torgby, Worlanyo Arhin, Horladem Kwame Torgby, Klenam Kwame Torgby,
Elinam Ayao Torgby and others`,

cousins:`James Kweku Torgby, Edith Esi Teiko Torgby, Abla Dede Torgby, Badu Torgby, Mrs Felicia
Quist (Germany), Mrs Philomena Boateng (Accra), Angelina Akoe Agbemava, Georgina Agbemava,
Christiana Agbemava, Logostene (Logosu) Agbemava, Moses Agbemava, Sedina Agbemava,
Elikplim Agbemava, Peace Dziedzom Tordzro, Frieda Tordzro, Eva Tordzro, Kwashi Kenkey Tordzro,
Titivi Tordzro, Helen Tordzro, Seth Tordzro, Dela Tordzro, , Elikplim Armando, Victoria Akorfa
Amekoenya, Rebecaa Mansa Eghan, Abla Amekoenya, Richard Sackitey, Emefa Kportufe, Selasi
Kportufe, Edoe Winney, Yvonne Fafali Attah, Esther Tetteh Addy Brothers and Sisters, Kwame
Tornyewonya Brothers and Sisters, Stephen Kwaku Essuman Brothers and Sisters and others

`,


  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-5xl font-bold text-white mb-6 text-center">Service Itinerary</h1>

      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        {schedule.map((item, index) => (
          <div key={index} className={`p-6 ${index !== schedule.length - 1 ? 'border-b border-gray-700' : ''}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.event}</h3>

                {item.extraDetails && (
                  <p className="text-yellow-300 text-lg font-medium mt-2">{item.extraDetails}</p>
                )}

                <p className="text-blue-400 text-lg font-medium mt-1 flex items-center gap-2">
                  <a
                    href={item.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <img src={mapicon} alt="Map Icon" className="w-5 h-5 mr-2" /> {item.location}
                  </a>
                </p>
              </div>

              <span className="text-xl font-semibold text-yellow-400 mt-3 md:mt-0">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Hymn Section */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <h2 className="text-3xl font-semibold text-white mb-4">{hymn.title}</h2>
        {hymn.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{section.sectionTitle}</h3>
            {section.hymns.map((hymnItem, hymnIndex) => (
              <div key={hymnIndex} className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-2">{hymnItem.title}</h4>
                <div className="text-lg text-white space-y-4 whitespace-pre-line">
                  {hymnItem.verses.map((verse, verseIndex) => (
                    <p key={verseIndex}>{verse}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mourners Section */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <h2 className="text-3xl font-semibold text-white mb-6">Mourners</h2>
        <div className="text-lg text-white space-y-4">
          <p><span className="font-bold">CHIEF MOURNERS:</span> {mourners.chiefMourner}</p>
          <p><span className="font-bold">WIFE:</span> {mourners.wife}</p>
          <p><span className="font-bold">CHILDREN:</span> {mourners.children}</p>
          <p><span className="font-bold">FATHER:</span> {mourners.father}</p>
          <p><span className="font-bold">MOTHER:</span> {mourners.mother}</p>
          <p><span className="font-bold">BROTHERS AND SISTERS:</span> {mourners.brothersandsisters}</p>
          <p><span className="font-bold">IN-LAWS:</span> {mourners.inlaw}</p>
          <p><span className="font-bold">NEPHEWS AND NIECES:</span> {mourners.nephewsandnieces}</p>
          <p><span className="font-bold">COUSINS:</span> {mourners.cousins}</p>
         
        </div>
      </div>
    </div>
  );
}

export default Program;
