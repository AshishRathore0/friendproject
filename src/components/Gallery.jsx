import React from 'react';

const Gallery = () => {
  // Replace these with your actual image paths
  const images = [
    { id: 1, src: '/images/pic1.jpg', caption: 'Our Beautiful Memory 1' },
    { id: 2, src: '/images/pic2.jpg', caption: 'Special Moment 2' },
    { id: 3, src: '/images/pic3.jpg', caption: 'Together Forever 3' },
    { id: 4, src: '/images/pic4.jpg', caption: 'Love and Laughter 4' },
    { id: 5, src: '/images/pic5.jpg', caption: 'Perfect Day 5' },
    { id: 6, src: '/images/pic6.jpg', caption: 'Sweet Memories 6' },
    { id: 7, src: '/images/pic7.jpg', caption: 'Happiness 7' },
    { id: 8, src: '/images/pic8.jpg', caption: 'My Favorite Person 8' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Our Special Gallery 📸</h2>
        <p style={{fontSize: '1.2rem', marginTop: '1rem', color: '#666'}}>
          Memories I cherish forever...
        </p>
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.caption} />
              <div className="gallery-overlay">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.8)', borderRadius: '15px'}}>
          <h3 style={{color: '#e91e63', marginBottom: '1rem'}}>To My Special Someone 💝</h3>
          <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
            Every picture tells a story, and every story has you in it. 
            You've colored my world with happiness and filled my life with love. 
            This gallery is just a small collection of the beautiful memories I want to create with you. 
            You're the most beautiful person I've ever known, inside and out. 
            Thank you for being you. 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;