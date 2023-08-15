/* eslint-disable react/prop-types */
function Button({ type, text, onChange }) {
  return (
    <button type={type} onClick={onChange}>
      {text}
    </button>
  );
}

export default Button;
