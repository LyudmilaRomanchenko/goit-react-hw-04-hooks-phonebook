// import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <label className={s.findLable}>
      Find contacts by name
      <input
        className={s.find}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(Filter);

export default Filter;
