// components/CardImage.jsx
import React from 'react';
import logo from '../images/logoFPT.png';

const CardImage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={logo}
        alt="FPT Education"
        style={{ maxHeight: '100px', width: 'auto' }}
      />
    </div>
  );
};

export default CardImage;
