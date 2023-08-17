/* eslint-disable react/prop-types */
import EducationDetails from "./resume-display/EducationDetails";
import ExperienceDetails from "./resume-display/ExperienceDetails";
import PersonalDetails from "./resume-display/PersonalDetails";
import SkillDetails from "./resume-display/SkillsDetails";
import SummaryDetails from "./resume-display/SummaryDetails";

function ResumeDetails({ fullName, phone, address, email, summary }) {
  return (
    <>
      <section id="personalDetails">
        <PersonalDetails fullName={fullName} phone={phone} address={address} email={email} />
      </section>
      <section id="summaryDetails">
        <SummaryDetails summary={summary} />
      </section>
      <section id="skillDetails">
        <SkillDetails />
      </section>
      <section id="experienceDetails">
        <ExperienceDetails />
      </section>
      <section id="educationDetails">
        <EducationDetails />
      </section>
    </>
  );
}

export default ResumeDetails;
