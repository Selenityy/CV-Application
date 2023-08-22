import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function EducationDetails({ schoolList }) {
  const [placeholder, setPlaceholder] = useState([
    {
      id: "placeholder",
      name: "Insert school name",
      degree: "Insert degree",
      start: "Insert start date",
      end: "Insert end date",
    },
  ]);

  useEffect(() => {
    if (schoolList.length > 0) {
      setPlaceholder(schoolList);
    } else {
      setPlaceholder([
        {
          id: "placeholder",
          name: "Insert school name",
          degree: "Insert degree",
          start: "Insert start date",
          end: "Insert end date",
        },
      ]);
    }
  }, [schoolList]);

  return (
    <>
      <h2>Education</h2>
      <ul>
        {placeholder.map((schoolItem) => (
          <li key={schoolItem.id}>
            <p>{schoolItem.name}</p>
            <p>{schoolItem.degree}</p>
            <p>{schoolItem.start}</p>
            <p>{schoolItem.end}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EducationDetails;
