const FormRow = ({ type, name, labelText, value, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        className="form-input"
        type={type}
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
