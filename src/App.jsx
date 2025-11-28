import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LoveNotes from './components/LoveNotes';
import Quotes from './components/Quotes';
import Shyari from './components/Shyari';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch(currentSection) {
      case 'notes':
        return <LoveNotes />;
      case 'quotes':
        return <Quotes />;
      case 'shyari':
        return <Shyari />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;