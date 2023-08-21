/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../utilities/Button";
import InputField from "../utilities/InputField";
import { v4 as uuidv4 } from "uuid";

function SkillInput({ onSkillAdd }) {
  const [skillInput, setSkillInput] = useState("");
  const [skillListInput, setSkillListInput] = useState([]);

  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleButtonClick = () => {
    const newSkill = { id: uuidv4(), skill: skillInput };
    setSkillListInput([...skillListInput, newSkill]);
    onSkillAdd(newSkill); // Notify the parent component about the new skill
    setSkillInput(""); // Clear the input field after adding skill
  };

  return (
    <>
      <h2>Skill Details</h2>
      <div id="skillField" className="skillDetails">
        <InputField
          label="Skill: "
          id=""
          type="text"
          value={skillInput}
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
