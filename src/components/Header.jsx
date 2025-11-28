import React from 'react';

const Header = ({ setCurrentSection, currentSection }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo" onClick={() => setCurrentSection('home')}>
          💖 My Love
        </div>
        <ul className="nav-links">
          <li><a 
            href="#notes" 
            className={currentSection === 'notes' ? 'active' : ''}
            onClick={() => setCurrentSection('notes')}
          >Love Notes</a></li>
          <li><a 
            href="#quotes" 
            className={currentSection === 'quotes' ? 'active' : ''}
            onClick={() => setCurrentSection('quotes')}
          >Quotes</a></li>
          <li><a 
            href="#shyari" 
            className={currentSection === 'shyari' ? 'active' : ''}
            onClick={() => setCurrentSection('shyari')}
          >Shayari</a></li>
          <li><a 
            href="#gallery" 
            className={currentSection === 'gallery' ? 'active' : ''}
            onClick={() => setCurrentSection('gallery')}
          >Our Gallery</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;