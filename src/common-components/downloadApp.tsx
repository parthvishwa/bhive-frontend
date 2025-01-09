import './downloadApp.css';
import { Typography, useMediaQuery } from '@mui/material';
import downloadApp from '../assets/downloadApp.svg';
import googlePLay from '../assets/googlePlay.svg';
import appStore from '../assets/appStore.svg';

const DownloadApp = () => {
  const itrTextWidthMobile = useMediaQuery('(max-width:1150px)');
  return (
    <>
      <div className="download-title">
        <Typography variant={itrTextWidthMobile ? 'h3' : 'h2'}>
          Download our app now
        </Typography>
      </div>
      <div className="download-app-content">
        <div className="app-image-container">
          <img className="app-image" src={downloadApp} height={itrTextWidthMobile? '320': '400'} alt="downloadApp" />
        </div>
        <div className="download-app-inner">
          <div className="download-app-inner-text">
            <Typography variant="h4" color="#605F5F">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </Typography>
          </div>
          <div className="download-app-stores">
            <img src={googlePLay} alt="google-play" />
            <img src={appStore} alt="app-store" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
