import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";

function SkillInput() {
  const [skill, setSkill] = useState("");

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Skill Details</h2>
      <div id="skillField" className="skillDetails">
        <InputField
          label="Skill: "
          id=""
          type="text"
          value={skill}
          placeholder=""
          onChange={handleSkillChange}
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

export default SkillInput;
