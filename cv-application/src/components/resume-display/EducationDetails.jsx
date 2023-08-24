import { useEffect, useState } from "react";
import "../../styles/EducationDetails.css";

/* eslint-disable react/prop-types */
function EducationDetails({ schoolList }) {
  const [placeholder, setPlaceholder] = useState([
    {
      id: "placeholder",
      name: "Insert school name",
      degree: "Insert degree",
      dates: "Insert start & end date",
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
          dates: "Insert start & end date",
        },
      ]);
    }
  }, [schoolList]);

  return (
    <>
      <h2 id="education-title">Education</h2>
      <hr></hr>
      <ul>
        {placeholder.map((schoolItem) => (
          <li key={schoolItem.id} className="school-items">
            <p className="school-name">{schoolItem.name}</p>
            <p className="school-degree">{schoolItem.degree}</p>
            <p className="school-dates">{schoolItem.dates}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EducationDetails;
