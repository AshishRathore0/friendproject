import React from 'react';

const LoveNotes = () => {
  const loveNotes = [
    {
      id: 1,
      title: "First Sight",
      content: "The first time I saw you, my heart skipped a beat. I knew right then that you were someone special."
    },
    {
      id: 2,
      title: "Your Smile",
      content: "Your smile is like sunshine on a cloudy day. It brightens everything around you."
    },
    {
      id: 3,
      title: "Thinking of You",
      content: "No matter what I'm doing, you're always on my mind. You've become my favorite thought."
    },
    {
      id: 4,
      title: "My Wish",
      content: "I wish I could hold your hand and tell you how much you mean to me every single day."
    },
    {
      id: 5,
      title: "Perfect You",
      content: "You're not perfect, but you're perfect for me. Every little thing about you makes me happy."
    },
    {
      id: 6,
      title: "My Dream",
      content: "You appear in my dreams more often than I'd like to admit. They're the best dreams."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Love Notes 💌</h2>
        <p style={{fontSize: '1.2rem', marginTop: '1rem', color: '#666'}}>
          Little messages from my heart to yours...
        </p>
        <div className="cards-grid">
          {loveNotes.map(note => (
            <div key={note.id} className="card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;