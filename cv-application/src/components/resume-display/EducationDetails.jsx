/* eslint-disable react/prop-types */

function EducationDetails({ schoolList }) {
  return (
    <>
      <h2>Education</h2>
      <ul>
        {schoolList.map((schoolItem) => (
          <li key={schoolItem.id}>
            <p>School Name: {schoolItem.name}</p>
            <p>Degree: {schoolItem.degree}</p>
            <p>Start Date: {schoolItem.start}</p>
            <p>End Date: {schoolItem.end}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EducationDetails;
