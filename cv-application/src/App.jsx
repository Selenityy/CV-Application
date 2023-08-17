import "./App.css";
import UserDetails from "./components/UserDetails";
import ResumeDetails from "./components/ResumeDetails";
import { useState } from "react";

function App() {
  const [fullNameInput, setFullNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [summaryInput, setSummaryInput] = useState("");

  const handleNameChange = (newName) => {
    setFullNameInput(newName);
  };

  const handleAddressChange = (newAddress) => {
    setAddressInput(newAddress);
  };

  const handleSummaryChange = (newSummary) => {
    setSummaryInput(newSummary);
  };

  return (
    <>
      <h1 id="resumeTitle">Resume Builder</h1>
      <div id="content">
        <div id="userInputs">
          <UserDetails
            name={fullNameInput}
            onNameChange={handleNameChange}
            address={addressInput}
            onAddressChange={handleAddressChange}
            summary={summaryInput}
            onSummaryChange={handleSummaryChange}
          />
        </div>
        <div id="resumeDisplay">
          <ResumeDetails
            summary={summaryInput}
            fullName={fullNameInput}
            address={addressInput}
          />
        </div>
      </div>
    </>
  );
}

export default App;
