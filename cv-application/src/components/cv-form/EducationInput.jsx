/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { v4 as uuidv4 } from "uuid";

function EducationInput({ onSchoolAdd }) {
  const [schoolInputs, setSchoolInputs] = useState([
    { id: uuidv4(), name: "", degree: "", start: "", end: "" },
  ]);

  const handleSchoolChange = (e, index, property) => {
    const updatedSchools = [...schoolInputs];
    updatedSchools[index][property] = e.target.value;
    setSchoolInputs(updatedSchools);
  };

  const handleAddSchool = () => {
    setSchoolInputs([
      ...schoolInputs,
      { id: uuidv4(), name: "", degree: "", start: "", end: "" },
    ]);
  };

  const handleSaveSchools = () => {
    const existingSchools = schoolInputs.filter((school) => school.name !== "");
    onSchoolAdd(existingSchools);
  };

  return (
    <>
      <h2>Education Details</h2>
      {schoolInputs.map((schoolInput, index) => (
        <div key={schoolInput.id} className="educationDetails">
          <InputField
            label="School Name: "
            id={`${schoolInput.id}-name`}
            type="text"
            value={schoolInput.name}
            placeholder=""
            onChange={(e) => handleSchoolChange(e, index, "name")}
          />
          <InputField
            label="Degree: "
            id={`${schoolInput.id}-degree`}
            type="text"
            value={schoolInput.degree}
            placeholder=""
            onChange={(e) => handleSchoolChange(e, index, "degree")}
          />
          <InputField
            label="Start Date: "
            id={`${schoolInput.id}-start`}
            type="text"
            value={schoolInput.start}
            placeholder=""
            onChange={(e) => handleSchoolChange(e, index, "start")}
          />
          <InputField
            label="End Date: "
            id={`${schoolInput.id}-end`}
            type="text"
            value={schoolInput.end}
            placeholder=""
            onChange={(e) => handleSchoolChange(e, index, "end")}
          />
        </div>
      ))}
      <Button
        className="submitBtn"
        type="submit"
        text="+ School"
        onClick={handleAddSchool}
      />
      <Button
        className="submitBtn"
        type="submit"
        text="Save"
        onClick={handleSaveSchools}
      />
    </>
  );
}

export default EducationInput;
