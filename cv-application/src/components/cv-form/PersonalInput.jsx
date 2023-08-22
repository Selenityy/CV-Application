/* eslint-disable react/prop-types */
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { useState } from "react";

function PersonalInput({
  onNameChange,
  onPhoneChange,
  onAddressChange,
  onEmailChange,
}) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    onNameChange(name);
    onPhoneChange(phone);
    onAddressChange(address);
    onEmailChange(email);
  };

  return (
    <>
      <h2 className="details-title">Personal Details</h2>
      <div id="nameField" className="personalDetails">
        <InputField
          label="Full Name: "
          id="name"
          htmlFor="name"
          type="text"
          value={name}
          placeholder=""
          onChange={handleNameChange}
        />
      </div>
      <div id="emailField" className="personalDetails">
        <InputField
          label="Email: "
          id="email"
          htmlFor="email"
          type="text"
          value={email}
          placeholder=""
          onChange={handleEmailChange}
        />
      </div>
      <div id="phoneField" className="personalDetails">
        <InputField
          label="Phone Number: "
          id="phone"
          htmlFor="phone"
          type="text"
          value={phone}
          placeholder=""
          onChange={handlePhoneChange}
        />
      </div>
      <div id="addressField" className="personalDetails">
        <InputField
          label="Address: "
          id="address"
          htmlFor="address"
          type="text"
          value={address}
          placeholder=""
          onChange={handleAddressChange}
        />
      </div>
      <Button
        className="submitBtn"
        type="submit"
        text="Save"
        onClick={handleButtonClick}
      />
    </>
  );
}

export default PersonalInput;
