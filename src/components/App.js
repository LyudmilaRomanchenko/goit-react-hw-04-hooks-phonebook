// import logo from "./logo.svg";
// import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import contacts from "./contacts.json";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import s from "./Phonebook.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    console.log(contacts);
    const normalizeTodo = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeTodo)
    );
  };

  deleteContact = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== todoId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <div className={s.container}>
        <div className={s.phonebookContainer}>
          <h1>Phonebook</h1>
          <ContactForm
            addContact={this.addContact}
            contacts={this.state.contacts}
          />
        </div>

        <div className={s.contactsContainer}>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContact}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
