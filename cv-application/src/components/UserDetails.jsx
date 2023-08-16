import PersonalInput from "./cv-form/personal";

function UserDetails() {
  return (
    <>
      <section id="personalInput">
        <PersonalInput />
      </section>
      <section id="summaryInput"></section>
      <section id="skillsInput"></section>
      <section id="experienceInput"></section>
      <section id="educationInput"></section>
      {/* <SummaryInput />
            <SkillsInput />
            <ExperienceInput />
            <EducationInput /> */}
    </>
  );
}

export default UserDetails;
