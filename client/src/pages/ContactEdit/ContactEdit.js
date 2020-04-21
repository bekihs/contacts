import React, { Component, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import ContactService from '../../services/ContactService'
import Input from '../../components/Input'

import './ContactEdit.css'
import imgAvatar from '../../assets/img_avatar.png'
import backImg from '../../assets/icons/back.png'
import deleteImg from '../../assets/icons/delete.png'

const Header = ({ contact, onDeleteContact }) => {
  const backUrl = contact._id ? `/contacts/${contact._id}` : `/contacts`

  return (
    <header className="contact-edit-header">
      <Link to={backUrl}>
        <img src={backImg} width="24px" height="24px" alt="Back" />
      </Link>
      {contact._id && <Link to='/' onClick={onDeleteContact}>
        <img src={deleteImg} width="24px" height="24px" alt="Delete" />
      </Link>}
    </header>
  )
}

function ContactEdit(props) {

  const [contact, setContact] = useState(ContactService.getEmptyContact())
  const [loading, setLoading] = useState(true)

  async function loadContact(id) {
    if (!id) {
      setLoading(false)
    }

    try {
      const selectedContact = await ContactService.getById(id)
      setContact(selectedContact)
      setLoading(false)
    } catch (err) {
      console.error(err);

    }
  }

  useEffect(() => {
    loadContact(props.match.params.id)
  }, [props.match.params.id]);


  const onInputChange = useCallback((field) => {
    setContact({ ...contact, ...field })
  })

  const onFormSubmit = useCallback(async (event) => {
    event.preventDefault()

    const updatedContact = await ContactService.save(contact)
    props.history.push(`/contacts/${updatedContact._id}`)
  });

  const onDeleteContact = useCallback(async () => {
    await ContactService.deleteContact(contact._id)
    props.history.push(`/contacts`)
  });

  const renderField = useCallback((name, title, value) => {
    return (
      <Input field={{ name, title, value }} onInput={onInputChange} />
    )
  });

  if (loading) return <div>Loading...</div>

  const avatar = contact.picture || imgAvatar

  return (
    <div className="contact-edit">
      <Header contact={contact} onDeleteContact={onDeleteContact} />
      <div className="contact-edit-body">
        <img src={avatar} alt="Person" width="96" height="96" />

        <form onSubmit={onFormSubmit} className="contact-edit-form">

          <div className="form-field">
            {renderField('name', 'Name', contact.name)}
          </div>

          <div className="form-field">
            {renderField('phone', 'Phone', contact.phone)}
          </div>

          <div className="form-field">
            {renderField('email', 'Email', contact.email)}
          </div>

          <div className="form-actions-container">
            <button type="submit">Save</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ContactEdit;
