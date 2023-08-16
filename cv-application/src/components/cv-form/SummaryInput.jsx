/* eslint-disable react/prop-types */
import InputField from "../utilities/InputField";

function SummaryInput({ summary, onSummaryChange }) {
  return (
    <>
      <h2>Summary Details</h2>
      <div id="summaryField" className="summaryDetails">
        <InputField
          label="Summary: "
          id="summary"
          htmlFor="summary"
          type="text"
          value={summary}
          placeholder=""
          onChange={onSummaryChange}
        />
      </div>
    </>
  );
}

export default SummaryInput;
