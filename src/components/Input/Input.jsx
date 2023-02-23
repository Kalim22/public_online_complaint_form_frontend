import React from "react";

function Input(props) {
  return (
    <>
      <div className="form__group field">
        <input
          type={props.type}
          className="form__field"
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          onChange={props.onchange}
          value={props.value}
          required
        />
        <label htmlFor={props.for} className="form__label">
          {props.label}
        </label>
      </div>
    </>
  );
}

export default Input;
