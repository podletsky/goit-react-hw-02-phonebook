import React, { useState } from 'react';
import styles from '../contactList/ContactList.module.css';
const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`Контакт з ім'ям ${name} вже існує!`);
    } else {
      addContact({ name, number });
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Phone Number"
        required
      />
      <button className={styles.buttonForm} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
