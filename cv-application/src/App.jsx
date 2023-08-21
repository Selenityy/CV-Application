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

  const handleAddSkill = (newSkills) => {
    setSkillList([...newSkills]);
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
          />
        </div>
      </div>
    </>
  );
}

export default App;
