import EducationDetails from "./resume-display/EducationDetails";
import ExperienceDetails from "./resume-display/ExperienceDetails";
import PersonalDetails from "./resume-display/PersonalDetails";
import SkillDetails from "./resume-display/SkillsDetails";
import SummaryDetails from "./resume-display/SummaryDetails";

function ResumeDetails() {
  return (
    <>
      <section id="personalDetails">
        <PersonalDetails />
      </section>
      <section id="summaryDetails">
        <SummaryDetails />
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
