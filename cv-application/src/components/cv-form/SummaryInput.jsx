import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";

function SummaryInput() {
  const [summary, setSummary] = useState("");

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Summary Details</h2>
      <div id="summaryField" className="summaryDetails">
        <InputField
          label="Summary: "
          id="summary"
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
