import { ReactElement, useState, useEffect } from 'react';
import './App.css';
import { AppStateProvider } from './app-theme/context/app-state-provider';
import Header from './common-components/header';
import Footer from './common-components/footer';
import RootNav from './routes/root-nav';
import DownloadApp from './common-components/downloadApp';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { THEME_OPTIONS } from './constants/theme-constant';
import { getDefaultState } from './app-theme/state-handler';
import { AppStateType } from './app-theme/types/app-state-types';
import { initialState, updateAppState } from './app-theme/state-reducer';

function App(): ReactElement {
  const [defaultState, setDefaultState] = useState<AppStateType>(initialState);

  useEffect(() => {
    let state = getDefaultState();
    if (!state) {
      return;
    }
    setDefaultState(state);
  }, []);

  let appTheme: ThemeOptions = createTheme(THEME_OPTIONS);

  return (
    <>
      <AppStateProvider reducer={updateAppState} initialState={defaultState}>
        <ThemeProvider theme={appTheme}>
          <div className="header-container-parent">
            <Header />
          </div>
          <div className="app-container">
            <RootNav />
          </div>
          <div className="download-app">
            <DownloadApp />
          </div>
          <Footer />
        </ThemeProvider>
      </AppStateProvider>
    </>
  );
}

export default App;
