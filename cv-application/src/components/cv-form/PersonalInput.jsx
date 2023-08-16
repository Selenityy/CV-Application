import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { useState } from "react";

function PersonalInput() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Personal Details</h2>
      <div id="nameField" className="personalDetails">
        <InputField
          label="Full Name: "
          id="name"
          type="text"
          value={fullName}
          placeholder=""
          onChange={handleNameChange}
        />
      </div>
      <div id="emailField" className="personalDetails">
        <InputField
          label="Email: "
          id="email"
          type="text"
          value={email}
          placeholder=""
          onChange={handleEmailChange}
        />
      </div>
      <div id="phoneInput" className="personalDetails">
        <InputField
          label="Phone: "
          id="phone"
          type="text"
          value={phone}
          placeholder=""
          onChange={handlePhoneChange}
        />
      </div>
      <div id="addressInput" className="personalDetails">
        <InputField
          label="Address: "
          id="address"
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
