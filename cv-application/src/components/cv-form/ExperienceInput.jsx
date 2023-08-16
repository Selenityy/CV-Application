import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";

function ExperienceInput() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDetails, setJobDetails] = useState("");

  const handleTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleJobDetailsChange = (e) => {
    setJobDetails(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Experience Details</h2>
      <div id="companyField" className="experienceDetails">
        <InputField
          label="Company Name: "
          id=""
          type="text"
          value={companyName}
          placeholder=""
          onChange={handleCompanyChange}
        />
      </div>
      <div id="jobTitleField" className="experienceDetails">
        <InputField
          label="Job Title: "
          id=""
          type="text"
          value={jobTitle}
          placeholder=""
          onChange={handleTitleChange}
        />
      </div>
      <div id="startDateField" className="experienceDetails">
        <InputField
          label="Start Date: "
          id=""
          type="text"
          value={startDate}
          placeholder=""
          onChange={handleStartDateChange}
        />
      </div>
      <div id="endDateField" className="experienceDetails">
        <InputField
          label="End Date: "
          id=""
          type="text"
          value={endDate}
          placeholder=""
          onChange={handleEndDateChange}
        />
      </div>
      <div id="jobDetailsField" className="experienceDetails">
        <InputField
          label="Job Details: "
          id=""
          type="text"
          value={jobDetails}
          placeholder=""
          onChange={handleJobDetailsChange}
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

export default ExperienceInput;
