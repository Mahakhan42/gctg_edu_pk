import React from 'react';
import { FaAngleUp } from 'react-icons/fa'; // Importing the Font Awesome angle up icon

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <button onClick={handleScrollToTop} style={styles.scrollButton}>
      <FaAngleUp size={20} style={{ color: '#05472A' }} /> {/* Using Font Awesome icon */}
    </button>
  );
};

const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#99c29e', // Button background color
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1000, // Ensure button is on top
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Optional: add shadow for better visibility
  },
};

export default ScrollToTop;
