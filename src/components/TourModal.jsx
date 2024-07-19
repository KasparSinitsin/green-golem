import React from 'react';
import tourDates from '../assets/TourDates';

const TourModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-start justify-start pt-[85px]">
      <div className="relative w-full lg:w-1/3 md:w-1/2 h-full p-6 overflow-y-auto bg-black bg-opacity-70 text-[#B0B270] shadow-lg">
        <div className="absolute top-2 right-2 cursor-pointer text-[#B0B270] text-2xl" onClick={onClose}>
          &times;
        </div>
        <h2 className="mb-4 text-2xl font-bold">Tour Dates</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="w-1/3 px-2 py-2 border-b border-gray-700">Date</th>
                <th className="w-1/3 px-2 py-2 border-b border-gray-700">City</th>
                <th className="w-1/3 px-2 py-2 border-b border-gray-700">Venue</th>
              </tr>
            </thead>
            <tbody>
              {tourDates.map((date, index) => (
                <tr key={index}>
                  <td className="px-2 py-2 border-b border-gray-700">{date.date}</td>
                  <td className="px-2 py-2 border-b border-gray-700">{date.city}</td>
                  <td className="px-2 py-2 border-b border-gray-700">{date.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
