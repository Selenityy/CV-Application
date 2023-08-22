/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function ExperienceDetails({ jobList }) {
  const [placeholder, setPlaceholder] = useState([
    {
      id: "placeholder",
      jobTitle: "Insert job title",
      companyName: "Insert company name",
      jobDates: "Insert start and end date",
      jobDescription: "Insert job description",
    },
  ]);

  useEffect(() => {
    if (jobList.length > 0) {
      setPlaceholder(jobList);
    } else {
      setPlaceholder([
        {
          id: "placeholder",
          jobTitle: "Insert job title",
          companyName: "Insert company name",
          jobDates: "Insert start and end date",
          jobDescription: "Insert job description",
        },
      ]);
    }
  }, [jobList]);

  return (
    <>
      <h2>Experience</h2>
      <ul>
        {placeholder.map((jobItem) => (
          <li key={jobItem.id}>
            <p>{jobItem.jobTitle}</p>
            <p>{jobItem.companyName}</p>
            <p>{jobItem.jobDates}</p>
            <p>{jobItem.jobDescription}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExperienceDetails;
