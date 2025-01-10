import Brandlogo from '../assets/brandLogo.svg';
import { IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img className="brand-logo" src={Brandlogo} alt="brandlogo" />
        <div className="contact-us">
          <IconButton color='primary' aria-label="contactUs" >
            <PhoneIcon color="primary"/>
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
