// import { nanoid } from 'nanoid';
// import React, { useState } from 'react';
// import ContactForm from './сontactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './filter/Filter';

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const addContact = (name, number) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     setContacts([...contacts, newContact]);
//   };

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   const handleDelete = contacts.pop(contact => contact.pop(contact.id));

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm addContact={addContact} contacts={contacts} />
//       <h2>Contacts</h2>
//       <Filter filter={filter} handleFilterChange={handleFilterChange} />
//       <ContactList contacts={(filteredContacts, handleDelete)} />
//     </div>
//   );
// };

// export { App };
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ContactForm from './сontactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import styles from './contactList/ContactList.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={handleDelete} />
    </div>
  );
};

export { App };
