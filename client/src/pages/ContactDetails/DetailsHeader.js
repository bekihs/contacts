import React from 'react';
import { Link } from 'react-router-dom';

import './ContactDetails.css'
import backImg from '../../assets/icons/back.png'
import editImg from '../../assets/icons/edit.png'

function    DetailsHeader({contact}) {
    return (
      <header className="contact-details-header">
        <Link to={`/contacts`} >
          <img src={backImg} width="24px" height="24px" alt="Back" />
        </Link>
        <Link to={`/contacts/edit/${contact._id}`}>
          <img src={editImg} width="24px" height="24px" alt="Edit" />
        </Link>
      </header>
    )
  } 
export default DetailsHeader;