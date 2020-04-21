import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactList from '../../components/ContactList'
import ContactFilter from '../../components/ContactFilter'

import './ContactPage.css'
import addImg from '../../assets/icons/plus.png'
import ContactService from '../../services/ContactService';

class ContactPage extends Component {
  state = { filter: '', contacts:[]}
  
  async componentDidMount() {
    const contacts = await ContactService.query()
    this.setState({contacts});
  }

  contactSearch = ({ filter }) => {
    this.setState({ filter })
  }


  render() {
    return (
      <div className="contacts-page">
        <div className="header-container">
          <div className="search-container">
            <ContactFilter onFilter={this.contactSearch} />
          </div>
          <div className="action-container">
            <Link to={'/contacts/new'}>
              <img src={addImg} width="48px" height="48px" alt="Add New" />
            </Link>
          </div>
        </div>
        <div className="contacts-container">
          <ContactList contacts={this.state.contacts} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
