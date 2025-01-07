import { ReactElement } from 'react';
import './App.css';
import { AppThemeProvider } from './app-theme/context/app-theme-provider';
import Header from './common-components/header';
import Footer from './common-components/footer';
import RootNav from './routes/root-nav';
import DownloadApp from './common-components/downloadApp';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';

function App(): ReactElement {
  let appTheme: ThemeOptions = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffbb00',
        light: '#ffcf4b',
        dark: '#ffc422',
      },
      secondary: {
        main: '#ffffff',
        light: '#f9f9f9',
        dark: '#cec6c6',
      },
      text: {
        primary: '#263238',
        secondary: '#65624c',
      },
    },
    components: {
      MuiTypography:{
        defaultProps: {
          color: 'textPrimary',
        }
      },
      MuiButton: {
        defaultProps: {
          translate: 'no',
        },
        styleOverrides: {
          root: {
            variants: [
              {
                props: { variant: 'contained', color: 'primary'},
                style: {
                  backgroundColor: '#ffcf4b',
                  border: '1px solid #FFC422',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
                }
              },
              {
                props: { variant: 'contained', color: 'secondary'},
                style: {
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #cec6c6',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
                }
              }
            ]
          },
        },
      },
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 14,
      allVariants: {
        lineHeight: `1.1`,
      },
      button: {
        textTransform: 'none',
      },
      h1: {
        fontSize: '58px',
        fontWeight: '700',
      },
      h2: {
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '28px',
      },
      h3: {
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '27px'
      },
      h4: {
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '140%',
      },
      h5: {
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '22px',
      },
      h6: {
        fontSize: '16px',
        fontWeight: '400',
      },
      body1: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '17px',
      },
      body2:{
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '19px',
      }
    },
  });

  return (
    <>
      <AppThemeProvider>
        <ThemeProvider theme={appTheme}>
          <div className="header-container">
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
      </AppThemeProvider>
    </>
  );
}

export default App;
