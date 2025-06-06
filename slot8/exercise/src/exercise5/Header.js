import React from 'react';
import logo from '../images/logoFPT.png';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#ef8c22', textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="FPT Logo" style={{ maxWidth: '250px', padding: '5px', backgroundColor: '#fff'}} />
    </div>
  );
};

export default Header;
