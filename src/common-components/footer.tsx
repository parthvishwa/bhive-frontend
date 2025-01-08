import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Typography variant="body1" color="secondary">
          {`© Copyright ${new Date().getFullYear()}. Bhive Private Limited`}
        </Typography>
      </div>
    </>
  );
};

export default Footer;