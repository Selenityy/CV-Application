import { useEffect, useState } from "react";
import "../../styles/SummaryDetails.css";

/* eslint-disable react/prop-types */
function SummaryDetails({ summary }) {
  const [placeholder, setPlaceholder] = useState("Insert summary");

  useEffect(() => {
    if (summary) {
      setPlaceholder(summary);
    } else {
      setPlaceholder("Insert summary");
    }
  }, [summary]);

  return (
    <>
      <h2 id="summary-title">Summary</h2>
      <hr></hr>
      <h3 id="summary-text">{placeholder}</h3>
    </>
  );
}

export default SummaryDetails;
