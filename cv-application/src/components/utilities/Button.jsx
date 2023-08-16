/* eslint-disable react/prop-types */
function Button({ id, type, text, onClick }) {
  return (
    <button id={id} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
