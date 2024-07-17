import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Eye.css';
import logo from '../assets/logo.svg';
import logoHover from '../assets/logo2.svg';
import grumbleSound from '../assets/grumble.wav';

const Eye = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleLogoClick = () => {
    const audio = new Audio(grumbleSound);
    audio.play();
  };

  return (
    <div className="eye-container" onClick={handleClick}>
      <motion.div
        className="eye"
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen && (
          <div
            className="pupil"
            style={{
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 10}px, ${(mousePosition.y - window.innerHeight / 2) / 10}px)`,
            }}
          >
            <div className="inner-pupil"></div>
          </div>
        )}
      </motion.div>
      <img
        src={isHovered ? logoHover : logo}
        alt="Band Logo"
        className="band-logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleLogoClick}
      />
    </div>
  );
};

export default Eye;
