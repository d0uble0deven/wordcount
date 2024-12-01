import React from "react";

const TextInputForm = ({ value, onChange, onSubmit, onClear }) => (
  <form onSubmit={onSubmit}>
    <textarea className="text_field" value={value} onChange={onChange} />
    <br />
    <input className="submit" type="submit" value="SUBMIT" />
    <input className="clear" type="button" value="CLEAR" onClick={onClear} />
  </form>
);

export default TextInputForm;
