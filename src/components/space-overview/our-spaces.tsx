import './our-spaces.css';
import { Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/system/Grid';
import { iSpace } from './types';
import { useEffect, useState } from 'react';
import spacesArr from '../../api/data.json';
import SpaceCard from './space-card/space-card';

const OurSpaces = () => {
  const itrTextWidthMobile = useMediaQuery('(max-width:900px)');

  const [spaces, setSpaces] = useState<Array<iSpace>>();

  useEffect(() => {
    if (!spacesArr || spacesArr.length < 1) {
      return;
    } else {
      setSpaces(JSON.parse(JSON.stringify(spacesArr)));
    }
  }, []);

  return (
    <>
      <div className="ourspaces-title">
        <Typography variant={itrTextWidthMobile ? 'h3' : 'h2'}>Our Space Overview</Typography>
      </div>
      <div className="spaces-grid-container">
        <Grid
          container
          spacing={{ xs: 1, md: 5 }}
          columns={{ xs: 1, md: 6, lg: 9 }}
        >
          {spaces &&
            spaces.map((space: iSpace, index: number) => {
              return (
                <Grid key={index} size={{ xs: 1, md: 3 }}>
                  <SpaceCard
                    id={space.id}
                    spaceAddress={space.address}
                    spaceName={space.name}
                    imageSrc={space.images[0]}
                    dayPassPrice={space.day_pass_price}
                    passDiscounts={space.day_pass_discounts_percentage}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default OurSpaces;
