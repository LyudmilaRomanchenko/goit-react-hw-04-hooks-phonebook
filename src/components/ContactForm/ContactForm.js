import { Component } from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  static defaultProps = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }).isRequired
    ),
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "name") {
      this.setState({
        name: e.currentTarget.value,
      });
    }
    if (e.currentTarget.name === "number") {
      this.setState({
        number: e.currentTarget.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(this.props.contacts);

    const isContactsIncludes = this.props.contacts.find(
      (contact) => contact.name === name
    );

    if (isContactsIncludes) {
      return alert(`${name}is alredy in contacts`);
    } else {
      this.props.addContact(name, number);

      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.lableContact}>
          Name
          <input
            className={s.inputContact}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={s.lableContact}>
          Number
          <input
            className={s.inputContact}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

// ContactForm.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.checkPropTypes(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.number.isRequired,
//       }).isRequired
//     )
//   ),
//   addContact: PropTypes.func.isRequired,
// };

// PropTypes.checkPropTypes(ContactForm);
