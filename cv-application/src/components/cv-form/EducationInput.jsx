/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { v4 as uuidv4 } from "uuid";
import "../../styles/EducationInput.css";

function EducationInput({ onSchoolAdd }) {
  const [schoolInputs, setSchoolInputs] = useState([
    { id: uuidv4(), name: "", degree: "", dates: "" },
  ]);

  const handleSchoolChange = (e, index, property) => {
    const updatedSchools = [...schoolInputs];
    updatedSchools[index][property] = e.target.value;
    setSchoolInputs(updatedSchools);
  };

  const handleAddSchool = () => {
    setSchoolInputs([
      ...schoolInputs,
      { id: uuidv4(), name: "", degree: "", dates: "" },
    ]);
  };

  const handleSaveSchools = () => {
    const existingSchools = schoolInputs.filter((school) => school.name !== "");
    onSchoolAdd(existingSchools);
  };

  return (
    <>
      <h2 className="details-title">Education Details</h2>
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
            label="Dates: "
            id={`${schoolInput.id}-dates`}
            type="text"
            value={schoolInput.dates}
            placeholder=""
            onChange={(e) => handleSchoolChange(e, index, "dates")}
          />
        </div>
      ))}
      <Button
        className="addBtn"
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
