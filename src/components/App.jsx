import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './сontactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import styles from './contactList/ContactList.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleDelete}
        />
      </div>
    );
  }
}

export { App };
