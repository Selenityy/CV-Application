/* eslint-disable react/prop-types */
import InputField from "../utilities/InputField";
import Button from "../utilities/Button";
import { useState } from "react";

function SummaryInput({ onSummaryChange }) {
  const [summary, setSummary] = useState("");

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleButtonClick = () => {
    onSummaryChange(summary);
  };

  return (
    <>
      <h2 className="details-title">Summary Details</h2>
      <div id="summaryField" className="summaryDetails">
        <InputField
          label="Summary: "
          id="summary"
          htmlFor="summary"
          type="text"
          value={summary}
          placeholder=""
          onChange={handleSummaryChange}
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

export default SummaryInput;
