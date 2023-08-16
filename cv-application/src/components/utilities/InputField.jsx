/* eslint-disable react/prop-types */
function InputField({ value, label, id, type, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
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
