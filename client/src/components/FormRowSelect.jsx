const FormRowSelect = ({ name, labelText, value, options, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <select
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="form-select"
        required
      >
        {options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}
              disabled={option.value === "" ? true : false}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
