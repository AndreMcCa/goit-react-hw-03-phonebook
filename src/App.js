import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from "./components/ContactForm/Input/Input";
import ContactList from "./components/ContactList/ContactList";


class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione', number: '443-89-12'},
        {id: 'id-3', name: 'Eden', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
      ],
      filter: '',
    }

    componentDidMount() {
      const contacts = localStorage.getItem('contacts');

      if(contacts) {
        this.setState(prevState => ({contacts: [...JSON.parse(contacts)]}))
      }
    }
    
    componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {
        this.renewalLocalStorage(this.state.contacts)   
      };
    }

    renewalLocalStorage = (contacts) => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    addContact = (name, number) => {
        const { contacts } = this.state;
        const id = uuidv4();
        const normalizedName = name.toLowerCase();
        const hasContact = contacts.find(contact => contact.name.toLowerCase() === normalizedName) 

        if(hasContact) {
          alert(`${normalizedName} is already in contacts`)
        } else {
          this.setState((prevState) => ({contacts: [...prevState.contacts, {id: id, name, number}]}))
        }
    };

    deleteContact = (e) => {
      const contactDeleteId = e.target.id;

      this.setState((prevState) => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactDeleteId)}))
    }

    filterChange = (e) => {
        this.setState({filter: e.target.value})
    }

    getFiltrationContacts = () => {
        const { filter, contacts } = this.state;
    
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
      }

    render() {
        const { filter } = this.state;
        const visibleContacts =  this.getFiltrationContacts();
  
      return (
        <>
            <h1>Phonebook</h1>
            <ContactForm addContact={this.addContact} id={uuidv4()}/>

            <h2>Contacts</h2>
            <Filter label="Find contacts by name" type="text" name="filter" value={filter} onChange={this.filterChange}/>

            <ContactList contacts={visibleContacts} onDelete={this.deleteContact}/>
        </>
    )
    }
  }
  
  export default App;
  
