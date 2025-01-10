import './our-spaces.css';
import {
  createTheme,
  CssBaseline,
  Switch,
  ThemeOptions,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Grid from '@mui/system/Grid';
import { iSpace } from './types';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import spacesArr from '../../api/data.json';
import SpaceCard from './space-card/space-card';
import { AppStateContext } from '../../app-theme/context/app-state-context';
import { THEME_OPTIONS } from '../../constants/theme-constant';
import { getThemeOptions } from '../../app-theme/state-handler';

const OurSpaces = () => {
  const itrTextWidthMobile = useMediaQuery('(max-width:900px)');

  const [spaces, setSpaces] = useState<Array<iSpace>>();
  const darkTheme = useRef<boolean>(false);

  const [appState, DispatchAppState] = useContext(AppStateContext);

  useEffect(() => {
    if (!spacesArr || spacesArr.length < 1) {
      return;
    } else {
      setSpaces(JSON.parse(JSON.stringify(spacesArr)));
    }
  }, []);

  const computedThemeOptions: ThemeOptions = useMemo(() => {
    if (!appState || !appState.appTheme) {
      return createTheme(THEME_OPTIONS);
    }
    const options = getThemeOptions(appState.appTheme);
    return createTheme(options);
  }, [darkTheme.current]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    DispatchAppState({ type: 'toggleTheme' });
    darkTheme.current = event.target.checked;
  };

  return (
    <>
      <ThemeProvider theme={computedThemeOptions}>
        <div className="ourspaces-title">
          <Typography variant={itrTextWidthMobile ? 'h3' : 'h2'}>
            Our Space Overview
          </Typography>
          <div className="theme-switch">
            <Typography variant="body1">Dark theme</Typography>
            <Switch checked={darkTheme.current} onChange={handleChange} />
          </div>
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
      </ThemeProvider>
    </>
  );
};

export default OurSpaces;
