/* eslint-disable react/prop-types */
import EducationDetails from "./resume-display/EducationDetails";
import ExperienceDetails from "./resume-display/ExperienceDetails";
import PersonalDetails from "./resume-display/PersonalDetails";
import SkillDetails from "./resume-display/SkillsDetails";
import SummaryDetails from "./resume-display/SummaryDetails";
import "../styles/ResumeDetails.css";

function ResumeDetails({
  fullName,
  phone,
  address,
  email,
  summary,
  skillList,
  jobList,
  schoolList,
}) {
  return (
    <>
      <section id="personalDetails">
        <PersonalDetails
          fullName={fullName}
          phone={phone}
          address={address}
          email={email}
        />
      </section>
      <section id="summaryDetails">
        <SummaryDetails summary={summary} />
      </section>
      <section id="skillDetails">
        <SkillDetails skillList={skillList} />
      </section>
      <section id="experienceDetails">
        <ExperienceDetails jobList={jobList} />
      </section>
      <section id="educationDetails">
        <EducationDetails schoolList={schoolList} />
      </section>
    </>
  );
}

export default ResumeDetails;
