import React from 'react';
import './App.css';
import Nav from './components/nav';
import Shelf from './components/shelf';
import Footer from './components/footer';
import { FeedsProvider } from './context/feedsContext';

const App = prop => {
  return (
    <FeedsProvider>
      <React.Fragment>
        <Nav />
        <Shelf />
        <Footer />
      </React.Fragment>
    </FeedsProvider>
  );
}

export default App;
