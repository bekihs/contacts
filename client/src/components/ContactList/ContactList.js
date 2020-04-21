import React from 'react';
import { Link } from 'react-router-dom';
import ContactPreview from '../ContactPreview'

import './ContactList.css';

const ContactList = (props) => {
  const { filter } = props;

  return (
    <div className="contacts-list">
        {props.contacts.map((contact, i) => {
          if (!filter || contact.name.match(filter) ||
            contact.phone.match(filter) ||
            contact.email.match(filter))
            return (
              <div key={contact._id} className="contacts-list-item">
                <Link to={`/contacts/${contact._id}`}><ContactPreview contact={contact} /></Link>
              </div>
            )
        })}
    </div>
  );
}

export default ContactList;
