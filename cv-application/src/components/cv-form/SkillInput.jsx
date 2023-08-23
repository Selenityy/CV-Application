/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { v4 as uuidv4 } from "uuid";
import "../../styles/SkillInput.css";

function SkillInput({ onSkillAdd }) {
  const [skillInputs, setSkillInputs] = useState([{ id: uuidv4(), skill: "" }]);

  const handleSkillChange = (e, index) => {
    const updatedInputs = [...skillInputs];
    updatedInputs[index].skill = e.target.value;
    setSkillInputs(updatedInputs);
  };

  const handleAddSkill = () => {
    setSkillInputs([...skillInputs, { id: uuidv4(), skill: "" }]);
  };

  const handleSaveSkills = () => {
    const existingSkills = skillInputs.filter((skill) => skill.skill !== "");
    onSkillAdd(existingSkills);
  };

  return (
    <>
      <h2 className="details-title">Skill Details</h2>
      {skillInputs.map((skillInput, index) => (
        <div key={skillInput.id} className="skillDetails">
          <InputField
            label="Skill: "
            id={skillInput.id}
            type="text"
            value={skillInput.skill}
            placeholder=""
            onChange={(e) => handleSkillChange(e, index)}
          />
        </div>
      ))}
      <Button
        className="addBtn"
        type="submit"
        text="+ Skill"
        onClick={handleAddSkill}
      />
      <Button
        className="submitBtn"
        type="submit"
        text="Save"
        onClick={handleSaveSkills}
      />
    </>
  );
}

export default SkillInput;
