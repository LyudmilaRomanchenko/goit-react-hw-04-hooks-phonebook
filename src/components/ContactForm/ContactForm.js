import { useState } from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

function ContactForm({ addContact, contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  console.log(contacts);

  const handleChange = (e) => {
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);

    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value);
    }

    if (e.currentTarget.name === "number") {
      setNumber(e.currentTarget.value);
    }
  };
  console.log(name);
  console.log(number);
  console.log(contacts.find);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contacts);

    const isContactsIncludes = contacts.find(
      (contact) => console.log(contact.name)
      // (contact) => contact.name === name
    );

    console.log(isContactsIncludes);

    if (isContactsIncludes) {
      return alert(`${name}is alredy in contacts`);
    } else {
      addContact(name, number);

      setName("");
      setNumber("");

      // this.setState({ name: "", number: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.lableContact}>
        Name
        <input
          className={s.inputContact}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
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

export default ContactForm;

ContactForm.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ),
  addContact: PropTypes.func.isRequired,
};

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
