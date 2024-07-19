import React, { useState } from 'react';
import Eye from './components/Eye';
import './App.css';
import BandModal from './components/BandModal';
import TourModal from './components/TourModal';
import AlbumsModal from './components/AlbumsModal';
import MerchModal from './components/MerchModal';
import eyeSmall from './assets/eye-small.png';
import logo from './assets/logo.svg';
import logo2 from './assets/logo2.svg';
import grumbleSound from './assets/grumble.wav';

const App = () => {
  const [leftModal, setLeftModal] = useState(null);
  const [rightModal, setRightModal] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleLogoClick = () => {
    const audio = new Audio(grumbleSound);
    audio.play();
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="navbar hidden sm:flex">
        <button onClick={() => setLeftModal('band')}>The Band</button>
        <button onClick={() => setLeftModal('tour')}>Tour Dates</button>
        <button onClick={() => setRightModal('albums')}>Albums</button>
        <button onClick={() => setRightModal('merch')}>Merch</button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex justify-between items-center p-4 bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50">
        <button className="text-[#B0B270] text-3xl" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          &#9776;
        </button>
      </div>

      {/* Mobile Menu Items */}
      {hamburgerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col items-start p-4 sm:hidden">
          <button className="block w-full text-left mt-12 p-2 text-xl text-[#B0B270]" onClick={() => { setLeftModal('band'); setHamburgerOpen(false); }}>The Band</button>
          <button className="block w-full text-left p-2 text-xl text-[#B0B270]" onClick={() => { setLeftModal('tour'); setHamburgerOpen(false); }}>Tour Dates</button>
          <button className="block w-full text-left p-2 text-xl text-[#B0B270]" onClick={() => { setRightModal('albums'); setHamburgerOpen(false); }}>Albums</button>
          <button className="block w-full text-left p-2 text-xl text-[#B0B270]" onClick={() => { setRightModal('merch'); setHamburgerOpen(false); }}>Merch</button>
        </div>
      )}

      <div className="eye-container">
        <Eye />
      </div>

      {/* Static Eye and Logo for Small Screens */}
      <div className="eye-small-container sm:hidden">
        <img src={eyeSmall} alt="Eye" className="eye-small" />
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={handleLogoClick}
          onMouseOver={(e) => (e.currentTarget.src = logo2)}
          onMouseOut={(e) => (e.currentTarget.src = logo)}
        />
      </div>

      {/* Modals */}
      <BandModal isOpen={leftModal === 'band'} onClose={() => setLeftModal(null)} />
      <TourModal isOpen={leftModal === 'tour'} onClose={() => setLeftModal(null)} />
      <AlbumsModal isOpen={rightModal === 'albums'} onClose={() => setRightModal(null)} />
      <MerchModal isOpen={rightModal === 'merch'} onClose={() => setRightModal(null)} />
    </div>
  );
};

export default App;
