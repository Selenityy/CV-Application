/* eslint-disable react/prop-types */
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { useState } from "react";

function PersonalInput({ onNameChange, onAddressChange }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleButtonClick = () => {
    onNameChange(name);
    onAddressChange(address);
  };

  return (
    <>
      <h2>Personal Details</h2>
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
