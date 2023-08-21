import "./App.css";
import UserDetails from "./components/UserDetails";
import ResumeDetails from "./components/ResumeDetails";
import { useState } from "react";

function App() {
  const [fullNameInput, setFullNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [summaryInput, setSummaryInput] = useState("");
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);

  const handleNameChange = (newName) => {
    setFullNameInput(newName);
  };

  const handlePhoneChange = (newPhone) => {
    setPhoneInput(newPhone);
  };

  const handleAddressChange = (newAddress) => {
    setAddressInput(newAddress);
  };

  const handleEmailChange = (newEmail) => {
    setEmailInput(newEmail);
  };

  const handleSummaryChange = (newSummary) => {
    setSummaryInput(newSummary);
  };

  const handleAddSkill = (newSkill) => {
    setSkill(newSkill);
    setSkillList([...skillList, newSkill])
  };

  return (
    <>
      <h1 id="resumeTitle">Resume Builder</h1>
      <div id="content">
        <div id="userInputs">
          <UserDetails
            name={fullNameInput}
            onNameChange={handleNameChange}
            phone={phoneInput}
            onPhoneChange={handlePhoneChange}
            address={addressInput}
            onAddressChange={handleAddressChange}
            email={emailInput}
            onEmailChange={handleEmailChange}
            summary={summaryInput}
            onSummaryChange={handleSummaryChange}
            // onSkillChange={handleSkillChange}
            onSkillAdd={handleAddSkill}
          />
        </div>
        <div id="resumeDisplay">
          <ResumeDetails
            fullName={fullNameInput}
            phone={phoneInput}
            address={addressInput}
            email={emailInput}
            summary={summaryInput}
            skillList={skillList}
            skill={skill}
          />
        </div>
      </div>
    </>
  );
}

export default App;
