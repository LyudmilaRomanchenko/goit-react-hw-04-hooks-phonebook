import s from "./ContactElement.module.css";
import PropTypes from "prop-types";

function ContactElement({ id, name, number, deleteContact }) {
  return (
    <p>
      <span>{name}:</span>
      <span className={s.number}>{number}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </p>
  );
}

ContactElement.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(ContactElement);

export default ContactElement;
