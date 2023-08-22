import { useEffect, useState, useMemo } from "react";

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
      <h2>Skills</h2>
      <ul>
        {placeholder.map((skillItem) => (
          <li key={skillItem.id}>
            <p>{skillItem.skill}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillDetails;
