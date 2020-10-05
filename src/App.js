import React, { useState } from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.scss';


function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      {page === 'home' &&
        <div className="home-page">
          <div className="content">
            <img id="wordmark" src="images/wordmark.png" alt="wordmark"/>
            <NavBar setPage={setPage}/>
          </div>
          <Footer className="footer"/>
        </div>
      }
      {page === 'about' &&
        <div className="about-page">
          <div className="content">
            <img src="images/wordmark.png" alt="wordmark"/>
            <NavBar setPage={setPage}/>
            <About/>
          </div>
          <Footer/>
        </div>
      }
      {page === 'media' &&
        <div className="media-page">
          <div className="content">
            <img src="images/wordmark.png" alt="wordmark"/>
            <NavBar setPage={setPage}/>
            <Media/>
          </div>
          <Footer/>
        </div>
      }
      {page === 'contact' &&
        <div className="contact-page">
          <div className="content">
            <img src="images/wordmark.png" alt="wordmark"/>
            <NavBar setPage={setPage}/>
            <Contact/>
          </div>
          <Footer/>
        </div>
      }
    </div>
  );
}

export default App;