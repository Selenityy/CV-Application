/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function PersonalDetails({ fullName, phone, address, email }) {
  const [placeholderName, setPlaceholderName] = useState("Full Name");
  const [placeholderPhone, setPlaceholderPhone] = useState("Phone Number");
  const [placeholderAddress, setPlaceholderAddress] = useState("Address");
  const [placeholderEmail, setPlaceholderEmail] = useState("Email");

  useEffect(() => {
    if (fullName) {
      setPlaceholderName(fullName);
    } else {
      setPlaceholderName("Full Name");
    }
  }, [fullName]);

  useEffect(() => {
    if (phone) {
      setPlaceholderPhone(phone);
    } else {
      setPlaceholderPhone("Phone Number");
    }
  }, [phone]);

  useEffect(() => {
    if (address) {
      setPlaceholderAddress(address);
    } else {
      setPlaceholderAddress("Address");
    }
  }, [address]);

  useEffect(() => {
    if (email) {
      setPlaceholderEmail(email);
    } else {
      setPlaceholderEmail("Email");
    }
  }, [email]);

  return (
    <>
      <h2>{placeholderName}</h2>
      <h3>{placeholderEmail}</h3>
      <h3>{placeholderPhone}</h3>
      <h3>{placeholderAddress}</h3>
    </>
  );
}

export default PersonalDetails;
