import React, { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { About, Footer, Header, Skills } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

return (
  <div className="app">
    {loading ? (
        <div className='loading'>
          <ScaleLoader color="#2AB0EC" width="10px" height="70px" />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Footer />
        </div>
      )}
  </div>
);
}

export default App;