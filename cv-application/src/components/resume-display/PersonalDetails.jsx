/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function PersonalDetails({ fullName, address }) {
  const [placeholderName, setPlaceholderName] = useState("Full Name");
  const [placeholderAddress, setPlaceholderAddress] = useState("Address");

  useEffect(() => {
    if (fullName) {
      setPlaceholderName(fullName);
    } else {
      setPlaceholderName("Full Name");
    }
  }, [fullName]);

  useEffect(() => {
    if (address) {
      setPlaceholderAddress(address);
    } else {
      setPlaceholderAddress("Address");
    }
  }, [address]);

  return (
    <>
      <h2>{placeholderName}</h2>
      <h3>email</h3>
      <h3>phone</h3>
      <h3>{placeholderAddress}</h3>
    </>
  );
}

export default PersonalDetails;
