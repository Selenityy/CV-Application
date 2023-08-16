import "./App.css";
import UserDetails from "./components/UserDetails";
import ResumeDetails from "./components/ResumeDetails";

function App() {
  return (
    <>
        <h1 id="resumeTitle">Resume Builder</h1>
        <div id="userInputs">
          <UserDetails />
        </div>
        <div id="resumeDisplay">
          <ResumeDetails />
        </div>
    </>
  );
}

export default App;
