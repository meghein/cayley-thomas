import React, { useState, useEffect } from 'react';
// import { useCookies } from 'react-cookie';
import NavBar from './components/NavBar'
import About from './components/About'
import Media from './components/Media'
import Contact from './components/Contact'
import MailingList from './components/MailingList'
import Footer from './components/Footer'
import Factor from './components/Factor'
import './App.scss';


export default function App() {
  // const [cookies, setCookie] = useCookies([]);
  const [page, setPage] = useState('home')
  const [subscribe, setSubscribe] = useState('out-footer')

  // useEffect(() => {
  //   setCookie('_ga', '_spotify',{path: '/', domain: '.spotify.com/', sameSite: 'none', secure: true})
  //   console.log(cookies)
  // }, [cookies])

  useEffect(() => {
    if (page === 'home') {
      setSubscribe('out-footer')
      // console.log(subscribe)
    }  else if (page === 'subscribe bar') {
      setSubscribe('mailing-list')
      // console.log(subscribe)
    } else {
      setSubscribe('in-footer')
    }
    // console.log(subscribe)
  }, [page])
  
  return (
    <div className="App">
      <Footer page={page} subscribe={subscribe}/>
      <div id="header" className={page}>
        <img src="images/wordmark.png" alt="wordmark"/>
        <NavBar setPage={setPage} id="nav"/>
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
          <MailingList subscribe={subscribe}/>
        }
        {page !== 'home' && <Factor/>}
      </div>
    </div>
  );
}