import React from 'react';
import Brandlogo from '../assets/brandLogo.svg';
import { IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="brand-logo" src={Brandlogo} alt="brandlogo" />
        <div className="contact-us">
          <IconButton aria-label="contactUs">
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
