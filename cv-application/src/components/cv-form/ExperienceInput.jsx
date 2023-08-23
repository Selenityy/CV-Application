/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { v4 as uuidv4 } from "uuid";
import "../../styles/ExperienceInput.css";

function ExperienceInput({ onJobAdd }) {
  const [jobInputs, setJobInputs] = useState([
    {
      id: uuidv4(),
      jobTitle: "",
      companyName: "",
      jobDates: "",
      jobDescription: "",
    },
  ]);

  const handleJobChange = (e, index, property) => {
    const updatedJobs = [...jobInputs];
    updatedJobs[index][property] = e.target.value;
    setJobInputs(updatedJobs);
  };

  const handleAddJob = () => {
    setJobInputs([
      ...jobInputs,
      {
        id: uuidv4(),
        jobTitle: "",
        companyName: "",
        jobDates: "",
        jobDescription: "",
      },
    ]);
  };

  const handleSaveJobs = () => {
    const existingJobs = jobInputs.filter((job) => job.jobTitle !== "");
    onJobAdd(existingJobs);
  };

  return (
    <>
      <h2 className="details-title">Experience Details</h2>
      {jobInputs.map((jobInput, index) => (
        <div key={jobInput.id} className="experienceDetails">
          <InputField
            label="Job Title: "
            id={`${jobInput.id}-jobTitle`}
            type="text"
            value={jobInput.jobTitle}
            placeholder=""
            onChange={(e) => handleJobChange(e, index, "jobTitle")}
          />
          <InputField
            label="Company: "
            id={`${jobInput.id}-companyName`}
            type="text"
            value={jobInput.companyName}
            placeholder=""
            onChange={(e) => handleJobChange(e, index, "companyName")}
          />
          <InputField
            label="Dates: "
            id={`${jobInput.id}-jobDates`}
            type="text"
            value={jobInput.jobDates}
            placeholder=""
            onChange={(e) => handleJobChange(e, index, "jobDates")}
          />
          <InputField
            label="Description: "
            id={`${jobInput.id}-jobDescription`}
            type="text"
            value={jobInput.jobDescription}
            placeholder=""
            onChange={(e) => handleJobChange(e, index, "jobDescription")}
          />
        </div>
      ))}
      <Button
        className="addBtn"
        type="submit"
        text="+ Experience"
        onClick={handleAddJob}
      />
      <Button
        className="submitBtn"
        type="submit"
        text="Save"
        onClick={handleSaveJobs}
      />
    </>
  );
}

export default ExperienceInput;
