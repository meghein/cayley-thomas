import React, { useState } from 'react'
import './MailingList.scss'

export default function MailingList(props) {
  const [user, setUser] = useState({
    emailValue: '',
    nameValue: '',
  })
  return (
    <div className="subscribe-page">
      <h3>Let's Stay in Touch</h3>
      <p className="signup">Sign up to receive news and updates.</p>
      <form className={props.subscribe} action="https://cayleythomas.us20.list-manage.com/subscribe/post" method="POST" noValidate >
        <input type="hidden" name="u" value="78686e4b82246c5bba3a92bd0"/>
        <input type="hidden" name="id" value="fef6220761"/>
        <label htmlFor='MERGE1'>
            <h4 className="name">Name:</h4>
            <input 
                type="text" 
                name="FNAME" 
                id="MERGE1" 
                value={user.nameValue} 
                onChange={(e)=>{setUser({nameValue: e.target.value});}}
            />
        </label>
        <label htmlFor='MERGE0'>
            <h4>Email:</h4>
            <input 
                type="email" 
                name="EMAIL" 
                id="MERGE0"
                value={user.emailValue} 
                onChange={ (e)=>{setUser({emailValue: e.target.value});} } 
                autoCapitalize="off" 
                autoCorrect="off"
              /> 
        </label>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="form-button"/>

        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
            <label htmlFor="b_name">Name: </label>
            <input type="text" name="b_name" tabIndex="-1" defaultValue="" placeholder="Freddie" id="b_name"/>

            <label htmlFor="b_email">Email: </label>
            <input type="email" name="b_email" tabIndex="-1" defaultValue="" placeholder="youremail@gmail.com" id="b_email"/>

            <label htmlFor="b_comment">Comment: </label>
            <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
        </div>
      </form>
      <p className="disclaimer">We respect your privacy and will never share your information with third parties.</p>
    </div>
    )
  }