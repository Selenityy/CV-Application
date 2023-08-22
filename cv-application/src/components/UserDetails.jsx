/* eslint-disable react/prop-types */
import EducationInput from "./cv-form/EducationInput";
import ExperienceInput from "./cv-form/ExperienceInput";
import PersonalInput from "./cv-form/PersonalInput";
import SkillInput from "./cv-form/SkillInput";
import SummaryInput from "./cv-form/SummaryInput";

function UserDetails({
  onNameChange,
  onPhoneChange,
  onAddressChange,
  onEmailChange,
  onSummaryChange,
  onSkillAdd,
  onSchoolAdd,
}) {
  return (
    <>
      <section id="personalInput">
        <PersonalInput
          onNameChange={onNameChange}
          onPhoneChange={onPhoneChange}
          onAddressChange={onAddressChange}
          onEmailChange={onEmailChange}
        />
      </section>
      <section id="summaryInput">
        <SummaryInput onSummaryChange={onSummaryChange} />
      </section>
      <section id="skillsInput">
        <SkillInput onSkillAdd={onSkillAdd} />
      </section>
      <section id="experienceInput">
        <ExperienceInput />
      </section>
      <section id="educationInput">
        <EducationInput onSchoolAdd={onSchoolAdd} />
      </section>
    </>
  );
}

export default UserDetails;
