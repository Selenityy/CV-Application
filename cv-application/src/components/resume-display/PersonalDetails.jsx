/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function PersonalDetails({ fullName }) {
  const [placeholder, setPlaceholder] = useState("Full Name");

  useEffect(() => {
    if (fullName) {
      setPlaceholder(fullName);
    } else {
      setPlaceholder("Full Name");
    }
  }, [fullName]);

  return (
    <>
      <h2>{placeholder}</h2>
      <h3>email</h3>
      <h3>phone</h3>
      <h3>address</h3>
    </>
  );
}

export default PersonalDetails;
