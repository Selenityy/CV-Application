import { useEffect, useState, useMemo } from "react";
import "../../styles/SkillDetails.css";

/* eslint-disable react/prop-types */
function SkillDetails({ skillList }) {
  const placeholderSkill = useMemo(
    () => ({ id: "placeholder", skill: "Insert skill" }),
    []
  );
  const [placeholder, setPlaceholder] = useState([placeholderSkill]);

  useEffect(() => {
    if (skillList.length > 0) {
      setPlaceholder(skillList);
    } else {
      setPlaceholder([placeholderSkill]);
    }
  }, [skillList, placeholderSkill]);

  return (
    <>
      <h2 id="skills-title">Skills</h2>
      <hr></hr>
      <ul id="allSkills">
        {placeholder.map((skillItem) => (
          <li key={skillItem.id} className="skills-list">
            <p>{skillItem.skill}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillDetails;
