import React, { useState, useEffect } from 'react';

import './ContactDetails.css'
import imgAvatar from '../../assets/img_avatar.png'
import ContactService from '../../services/ContactService';
import DetailsHeader from './DetailsHeader';

function ContactDetails(props) {

  const [contact, setContact] = useState({})

  async function loadContact(id) {
    const selectedContact = await ContactService.getById(id)
    setContact(selectedContact)
  }
  useEffect(() => {
    loadContact(props.match.params.id)
  }, [props.match.params.id]);


  if (!contact) return <div>Loading...</div>

  const avatar = contact.picture || imgAvatar

  return (
    <div className="contact-details">
      <DetailsHeader contact={contact}></DetailsHeader>
      <div className="contact-details-body">
        <img src={avatar} alt="Person" width="96" height="96" />
        <div class="contact-details">
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails;