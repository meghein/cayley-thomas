import React, { useState } from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.scss';
import { PageHeader } from 'antd';

// import wordmark from 'images/wordmark.png'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      {page === 'home' &&
        <div className="home-page">
          <PageHeader className="site-page-header">
            <img src="images/wordmark.png" alt="wordmark"/>
          </PageHeader>
          <NavBar
            setPage={setPage}
          />
        </div>
      }
      {page === 'about' &&
        <div className="about-page">
          <PageHeader className="site-page-header">
            <img src="images/wordmark.png" alt="wordmark"/>
          </PageHeader>
          <NavBar
            setPage={setPage}
          />
          <About/>
        </div>
      }
      {page === 'media' &&
        <div className="media-page">
          <PageHeader className="site-page-header">
            <img src="images/wordmark.png" alt="wordmark"/>
          </PageHeader>
          <NavBar
            setPage={setPage}
          />
          <Media/>
        </div>
      }
      {page === 'contact' &&
        <div className="contact-page">
          <PageHeader className="site-page-header">
            <img src="images/wordmark.png" alt="wordmark"/>
          </PageHeader>
          <NavBar
            setPage={setPage}
          />
          <Contact/>
        </div>
      }
      <Footer/>
    </div>
  );
}

export default App;