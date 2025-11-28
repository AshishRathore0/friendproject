import React from 'react';

const Shyari = () => {
  const shayaris = [
    {
      id: 1,
      content: "Teri aankhon mein main kho jaau, \nTeri baaton mein main gum ho jau, \nYun to bahut se log hai duniya mein, \nPar tere bina koi apna nahi lagta.",
      emoji: "😍"
    },
    {
      id: 2,
      content: "Dil ki dhadkan ban gaye ho tum, \nKhwabon ki raunak ban gaye ho tum, \nKya bataye kaise pyar hua, \nBas tum hi to meri jaan ban gaye ho tum.",
      emoji: "💖"
    },
    {
      id: 3,
      content: "Tere ishq ne badal di hai zindagi meri, \nHar pal ab lagta hai khubsoorat, \nTujhse milke ye ehsaas hua, \nJaise mil gayi ho manzil meri.",
      emoji: "✨"
    },
    {
      id: 4,
      content: "Har sapna tera, har khwaish teri, \nDil ki har dhadkan teri, \nTujhko chahne ki wajah nahi, \nBas ek aadat si hai teri.",
      emoji: "🌹"
    },
    {
      id: 5,
      content: "Ankhon mein base ho tum, \nDil mein basa hai tumhara naam, \nKaise bataye kyun pyar hai tumse, \nYeh to ek ankahi si baat hai.",
      emoji: "🥰"
    },
    {
      id: 6,
      content: "Tumhare bina adhoori si hai zindagi meri, \nTumhare saath poori si hai har kahani, \nPyaar hai tumse itna khass, \nKehne ko mil gayi hai ye zubani.",
      emoji: "💕"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Romantic Shayari 🌹</h2>
        <p style={{fontSize: '1.2rem', marginTop: '1rem', color: '#666'}}>
          Expressing feelings through poetry...
        </p>
        <div className="cards-grid">
          {shayaris.map(shayari => (
            <div key={shayari.id} className="card">
              <div style={{whiteSpace: 'pre-line', fontSize: '1.1rem', lineHeight: '1.8'}}>
                {shayari.content}
              </div>
              <div style={{fontSize: '2rem', marginTop: '1rem'}}>
                {shayari.emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shyari;