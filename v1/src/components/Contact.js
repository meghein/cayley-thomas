import React from 'react';
import { contact } from '../data';
import './Contact.scss';

export default function Contact() {
  return (
    <div id='contact'>
      <div className='form'>
        <h2>Artist</h2>
        <h3>{contact.artistName}</h3>
        <a href={`mailto:${contact.artistEmail}`}>{contact.artistEmail}</a>
        <h2>Management</h2>
        <h3>{contact.managementName}</h3>
        <a href={`mailto:${contact.managementEmail}`}>{contact.managementEmail}</a>
      </div>
    </div>
  )
}
