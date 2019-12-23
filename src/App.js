import React from 'react';
import './App.css';
import Nav from './components/nav';
import Shelf from './components/shelf';
import Footer from './components/footer';
//import { FeedsContext } from './context/feedsContext';
// const [feeds, setFeeds] = useState();

const App = prop => {
  return (
    // <FeedsContext.Provider value={[feeds, setFeeds]}>
    <React.Fragment>
      <Nav />
      <Shelf />
      <Footer />
    </React.Fragment>
    // </FeedsContext.Provider>
  );
}

export default App;
