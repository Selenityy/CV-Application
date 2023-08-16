/* eslint-disable react/prop-types */
function InputField({ value, label, id, htmlFor, type, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default InputField;
