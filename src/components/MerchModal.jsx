import React from 'react';
import tshirt from '../assets/tshirt.png';
import bag from '../assets/bag.png';

const MerchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-start justify-end pt-[85px]">
      <div className="relative w-full lg:w-1/3 md:w-1/2 h-full p-6 overflow-y-auto bg-black bg-opacity-70 text-[#B0B270] shadow-lg">
        <div className="absolute top-2 left-2 cursor-pointer text-[#B0B270] text-2xl" onClick={onClose}>
          &times;
        </div>
        <div className="flex flex-col items-center">
          <img src={tshirt} alt="T-shirt" className="w-full mb-4" />
          <p className="mb-4 text-center">Looking to possess a cool object with our iconic eye or the band logo? We've got you covered! Contact us at merch@greengolem.org for more details about our state-of-art custom merchandise!</p>
          <img src={bag} alt="Bag" className="w-full mb-4" />
        </div>
      </div>
    </div>
  );
};

export default MerchModal;
