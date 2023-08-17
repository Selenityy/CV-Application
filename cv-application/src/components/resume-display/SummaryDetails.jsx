import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function SummaryDetails({ summary }) {
  const [placeholder, setPlaceholder] = useState("Insert text");

  useEffect(() => {
    if (summary) {
      setPlaceholder(summary);
    } else {
      setPlaceholder("Insert Text");
    }
  }, [summary]);

  return (
    <>
      <h2>Summary</h2>
      <h3>{placeholder}</h3>
    </>
  );
}

export default SummaryDetails;
