import React from 'react';
import bandVideo from '../assets/band.mp4';

const BandModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start pt-[85px]">
      <div className="relative w-full lg:w-1/3 md:w-1/2 h-full p-6 overflow-y-auto bg-black bg-opacity-70 text-[#B0B270] shadow-lg">
        <div className="absolute top-2 right-2 cursor-pointer text-[#B0B270] text-2xl" onClick={onClose}>
          &times;
        </div>
        <h2 className="mb-4 text-2xl font-bold">There once was a music band... or was it?</h2>
        <video src={bandVideo} className="w-full mb-4" autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
        <p>Green Golem is what happens when klezmer meets stoner rock in a smoky queer bar after midnight. Born from a chance encounter, their sound is a wild blend of soulful klezmer melodies and heavy, fuzzy rock riffs.</p>
        <p>Whether you're here for the nostalgia or the headbanging, Green Golem has got you covered. Ready to join the party?</p>
      </div>
    </div>
  );
};

export default BandModal;
