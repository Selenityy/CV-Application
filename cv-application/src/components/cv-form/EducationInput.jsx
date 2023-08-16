import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";

function EducationInput() {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSchoolStartDateChange = (e) => {
    setSchoolStartDate(e.target.value);
  };

  const handleSchoolEndDateChange = (e) => {
    setSchoolEndDate(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Education Details</h2>
      <div id="schoolField" className="educationDetails">
        <InputField
          label="School Name: "
          id="schoolName"
          type="text"
          value={schoolName}
          placeholder=""
          onChange={handleSchoolNameChange}
        />
      </div>
      <div id="degreeField" className="educationDetails">
        <InputField
          label="Degree: "
          id="degree"
          type="text"
          value={degree}
          placeholder=""
          onChange={handleDegreeChange}
        />
      </div>
      <div id="schoolStartDateField" className="educationDetails">
        <InputField
          label="Start Date: "
          id="schoolStartDate"
          type="text"
          value={schoolStartDate}
          placeholder=""
          onChange={handleSchoolStartDateChange}
        />
      </div>
      <div id="schoolEndDateField" className="educationDetails">
        <InputField
          label="End Date: "
          id="schoolEndDate"
          type="text"
          value={schoolEndDate}
          placeholder=""
          onChange={handleSchoolEndDateChange}
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

export default EducationInput;
