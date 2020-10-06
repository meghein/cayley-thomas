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
      <Footer className={page}/>
      <div id="header" className={page}>
        <img src="images/wordmark.png" alt="wordmark"/>
        <NavBar setPage={setPage}/>
      </div>
      {page === 'home' &&
        <div className="home-page"/>
      }
      <div className="page">
        {page === 'about bar' &&
          <About/>
        }
        {page === 'media bar' &&
          <Media/>
        }
        {page === 'contact bar' &&
          <Contact/>
        }
        {page === 'subscribe bar' &&
          <MailingList/>
        }
      </div>
    </div>
  );
}