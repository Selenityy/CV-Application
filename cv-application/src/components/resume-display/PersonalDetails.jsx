/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../../styles/PersonalDetails.css";

function PersonalDetails({ fullName, phone, address, email }) {
  const [placeholderName, setPlaceholderName] = useState("Insert full name");
  const [placeholderPhone, setPlaceholderPhone] = useState(
    "Insert phone number"
  );
  const [placeholderAddress, setPlaceholderAddress] =
    useState("Insert address");
  const [placeholderEmail, setPlaceholderEmail] = useState("Insert email");

  useEffect(() => {
    if (fullName) {
      setPlaceholderName(fullName);
    } else {
      setPlaceholderName("Insert full name");
    }
  }, [fullName]);

  useEffect(() => {
    if (phone) {
      setPlaceholderPhone(phone);
    } else {
      setPlaceholderPhone("Insert phone number");
    }
  }, [phone]);

  useEffect(() => {
    if (address) {
      setPlaceholderAddress(address);
    } else {
      setPlaceholderAddress("Insert address");
    }
  }, [address]);

  useEffect(() => {
    if (email) {
      setPlaceholderEmail(email);
    } else {
      setPlaceholderEmail("Insert email");
    }
  }, [email]);

  return (
    <>
      <h2 id="resume-name">{placeholderName}</h2>
      <h3 id="resume-email">{placeholderEmail}</h3>
      <h3 id="resume-phone">{placeholderPhone}</h3>
      <h3 id="resume-address">{placeholderAddress}</h3>
    </>
  );
}

export default PersonalDetails;
