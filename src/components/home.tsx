import coworking from '../assets/coworking.svg';
import introvector from '../assets/introvector.svg';
import Grid from '@mui/system/Grid';
import { Typography, useMediaQuery } from '@mui/material';
import { wcData } from './wcu/wcu-data';
import OurSpaces from './space-overview/our-spaces';
const Home = () => {
  const amenities = wcData;

  const isDeviceWidthSmall: boolean = useMediaQuery('(max-width:900px)');

  return (
    <>
      <div className="home-page">
        <div className="intro-container">
          <div className="intro-text-container">
            <div className="intro-text">
              <Typography
                variant={isDeviceWidthSmall ? 'h3' : 'h1'}
                lineHeight={isDeviceWidthSmall ? '28px' : '1.1'}
              >
                Host your meeting with world-class amenities. Starting at
                <Typography
                  component="span"
                  variant={isDeviceWidthSmall ? 'h3' : 'h1'}
                  lineHeight={isDeviceWidthSmall ? '28px' : '1.1'}
                  color="primary"
                >
                  &nbsp;₹199/-&nbsp;!
                </Typography>
              </Typography>
            </div>
          </div>
          <div className="intro-pic">
            <img
              src={introvector}
              style={{ position: 'absolute', right: '0' }}
            />
            <img className="intro-pic-coworking" src={coworking} height={400} />
          </div>
        </div>
        <div className="why-choose-us">
          <div className="why-choose-title">
            <Typography variant={isDeviceWidthSmall ? 'h3' : 'h2'}>
              Why Choose us?
            </Typography>
          </div>
          <div className="why-choose-content">
            <Grid
              container
              className="wcu-grid-container"
              spacing={{ xs: 2, md: 0 }}
              columns={{ xs: 2, md: 12 }}
            >
              {amenities.map((amenity: { name: string; iconsrc: string }) => {
                return (
                  <Grid
                    size={{ xs: 1, md: 3 }}
                    className="wcu-grid"
                    key={amenity.name}
                  >
                    <div className="wcu-icon">
                      <img src={amenity.iconsrc} alt={amenity.name} />
                    </div>
                    <div className="wcu-amenity">
                      <Typography variant="h5">{amenity.name}</Typography>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
        <div className="space-overview">
          <OurSpaces />
        </div>
      </div>
    </>
  );
};

export default Home;
