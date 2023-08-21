/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

function SkillDetails({ skillList }) {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skillList.map((skillItem) => (
          <li key={skillItem.id}>{skillItem.skill}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillDetails;
