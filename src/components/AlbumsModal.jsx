import React from 'react';
import cover1 from '../assets/cover1.png';
import cover2 from '../assets/cover2.png';
import cover3 from '../assets/cover3.png';
import cover4 from '../assets/cover4.png';

const albums = [
  { name: "Der Griner Golem", cover: cover1 },
  { name: "Unnecessarily long and hardly pleasant experience", cover: cover2 },
  { name: "A Glezele Mashke", cover: cover3 },
  { name: "1312", cover: cover4 },
];

const AlbumsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-end pt-[85px]">
      <div className="relative w-full lg:w-1/3 md:w-1/2 h-full p-6 overflow-y-auto bg-black bg-opacity-70 text-[#B0B270] shadow-lg">
        <div className="absolute top-2 left-2 cursor-pointer text-[#B0B270] text-2xl" onClick={onClose}>
          &times;
        </div>
        <div className="grid grid-cols-1 gap-4">
          {albums.map((album, index) => (
            <div key={index} className="text-center">
              <h3 className="mb-2 text-xl">{album.name}</h3>
              <img src={album.cover} alt={album.name} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsModal;
