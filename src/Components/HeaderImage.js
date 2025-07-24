import React from 'react';
import './HeaderImage.css'; // create this file for styling
import headerImage from '../assets/about-header.jpg'; // Update with your actual image

function HeaderImage({ title }) {
  return (
    <div className="header-image-container">
      <img src={headerImage} alt="Header" className="header-image" />
      <div className="header-overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default HeaderImage;
