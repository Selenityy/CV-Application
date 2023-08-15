import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { useState } from "react";

function Personal() {
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

  return (
    <>
      <h2>Personal Details</h2>
      <InputField
        label="Full Name: "
        id="name"
        type="text"
        value={fullName}
        placeholder=""
        onChange={handleNameChange}
      />
      <InputField
        label="Email: "
        id="email"
        type="text"
        value={email}
        placeholder=""
        onChange={handleEmailChange}
      />
      <InputField
        label="Phone: "
        id="phone"
        type="text"
        value={phone}
        placeholder=""
        onChange={handlePhoneChange}
      />
      <InputField
        label="Address: "
        id="address"
        type="text"
        value={address}
        placeholder=""
        onChange={handleAddressChange}
      />
      <Button type="submit" text="Save" />
    </>
  );
}

export default Personal;
