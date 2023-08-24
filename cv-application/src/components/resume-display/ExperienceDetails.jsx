/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../../styles/ExperienceDetails.css";

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
      <h2 id="experience-title">Work Experience</h2>
      <hr></hr>
      <ul id="allJobs">
        {placeholder.map((jobItem) => (
          <li key={jobItem.id} className="job-items">
            <p className="job-title">{jobItem.jobTitle}</p>
            <p className="company-name">{jobItem.companyName}</p>
            <p className="job-dates">{jobItem.jobDates}</p>
            <p className="job-description">
              <span className="bullet-circle">&#x2B24;</span>{" "}
              {jobItem.jobDescription}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExperienceDetails;
