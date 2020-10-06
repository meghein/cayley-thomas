import React, { useState } from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Media from './components/Media'
import Contact from './components/Contact'
import MailingList from './components/MailingList'
import Footer from './components/Footer'
import './App.scss';


export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <Footer className="footer"/>
      {page === 'home' &&
        <div className="home-page"/>
      }
      <div className="page">
        <div className="header">
          <img src="images/wordmark.png" alt="wordmark"/>
          <NavBar setPage={setPage}/>
        </div>
        {page === 'about' &&
          <About/>
        }
        {page === 'media' &&
          <Media/>
        }
        {page === 'contact' &&
          <Contact/>
        }
        {page === 'subscribe' &&
          <MailingList/>
        }
      </div>
    </div>
  );
}