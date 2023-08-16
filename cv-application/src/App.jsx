import "./App.css";
import UserDetails from "./components/UserDetails";
import ResumeDetails from "./components/ResumeDetails";
import { useState } from "react";

function App() {
  const [summaryInput, setSummaryInput] = useState("");

  const handleSummaryChange = (e) => {
    const newSummary = e.target.value;
    setSummaryInput(newSummary);
  };

  return (
    <>
      <h1 id="resumeTitle">Resume Builder</h1>
      <div id="content">
        <div id="userInputs">
          <UserDetails
            summary={summaryInput}
            onSummaryChange={handleSummaryChange}
          />
        </div>
        <div id="resumeDisplay">
          <ResumeDetails summary={summaryInput} />
        </div>
      </div>
    </>
  );
}

export default App;
