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
  const [bandModalOpen, setBandModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [albumsModalOpen, setAlbumsModalOpen] = useState(false);
  const [merchModalOpen, setMerchModalOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleLogoClick = () => {
    const audio = new Audio(grumbleSound);
    audio.play();
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="navbar hidden sm:flex">
        <button onClick={() => setBandModalOpen(true)}>The Band</button>
        <button onClick={() => setTourModalOpen(true)}>Tour Dates</button>
        <button onClick={() => setAlbumsModalOpen(true)}>Albums</button>
        <button onClick={() => setMerchModalOpen(true)}>Merch</button>
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
          <button className="block w-full text-left mt-12 p-2 text-xl text-[#B0B270]" onClick={() => { setBandModalOpen(true); setHamburgerOpen(false); }}>The Band</button>
          <button className="block w-full text-left p-2 text-xl text-[#B0B270]" onClick={() => { setTourModalOpen(true); setHamburgerOpen(false); }}>Tour Dates</button>
          <button className="block w-full text-left p-2 text-xl text-[#B0B270]" onClick={() => { setAlbumsModalOpen(true); setHamburgerOpen(false); }}>Albums</button>
          <button className="block w-full text-left p-2 text-xl text-[#B0B270]" onClick={() => { setMerchModalOpen(true); setHamburgerOpen(false); }}>Merch</button>
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

      <BandModal isOpen={bandModalOpen} onClose={() => setBandModalOpen(false)} />
      <TourModal isOpen={tourModalOpen} onClose={() => setTourModalOpen(false)} />
      <AlbumsModal isOpen={albumsModalOpen} onClose={() => setAlbumsModalOpen(false)} />
      <MerchModal isOpen={merchModalOpen} onClose={() => setMerchModalOpen(false)} />
    </div>
  );
};

export default App;
