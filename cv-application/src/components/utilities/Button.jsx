/* eslint-disable react/prop-types */
import "../../styles/Buttons.css";

function Button({ className, type, text, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
