import { useState } from 'react';
import './App.css';
import Header from './common-components/header';
import Footer from './common-components/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
        
        <div>
          Welcome to bhive
          <BrowserRouter children={keyRoutes}>
        </BrowserRouter>
        </div>
      <Footer />
    </>
  );
}

export default App;
