import React from 'react';

const Quotes = () => {
  const romanticQuotes = [
    {
      id: 1,
      quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
      author: "Angelita Lim"
    },
    {
      id: 2,
      quote: "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
      author: ""
    },
    {
      id: 3,
      quote: "If I had a flower for every time I thought of you, I could walk in my garden forever.",
      author: "Alfred Tennyson"
    },
    {
      id: 4,
      quote: "I love you not only for what you are, but for what I am when I am with you.",
      author: "Elizabeth Barrett Browning"
    },
    {
      id: 5,
      quote: "Every love story is beautiful, but ours is my favorite.",
      author: ""
    },
    {
      id: 6,
      quote: "You're the missing piece I never knew I was looking for.",
      author: ""
    },
    {
      id: 7,
      quote: "In your smile, I see something more beautiful than the stars.",
      author: ""
    },
    {
      id: 8,
      quote: "I never want to stop making memories with you.",
      author: ""
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Romantic Quotes 💫</h2>
        <p style={{fontSize: '1.2rem', marginTop: '1rem', color: '#666'}}>
          Words that express what my heart feels...
        </p>
        <div className="cards-grid">
          {romanticQuotes.map(quote => (
            <div key={quote.id} className="card">
              <p style={{fontStyle: 'italic', fontSize: '1.1rem'}}>"{quote.quote}"</p>
              {quote.author && (
                <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#e91e63'}}>
                  - {quote.author}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;