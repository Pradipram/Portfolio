import React, { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { educationStyle } from "../../../assets";
// import { EducationList } from '../../../utils';
import { getEducatinApi } from "../../../API";

interface Education {
  stream: string;
  major?: string;
  school: string;
  location: string;
  date: string;
  icon: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  FaUniversity: <FaUniversity />,
  LuSchool: <LuSchool />,
  // Add more icons here as needed
};

const Education = () => {
  const [EducationList, setEducationList] = useState<Education[]>([]);

  useEffect(() => {
    // Fetch the current about text from the server
    const fetchEducation = async () => {
      try {
        const education = await getEducatinApi();
        if (education) {
          setEducationList(education);
        }
      } catch (error) {
        console.error("Error fetching about text:", error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <div className={educationStyle.education} id="education">
      <h1>Education Details</h1>
      <VerticalTimeline>
        {EducationList.map((education, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={education.date}
            iconStyle={{ background: "white", color: "black" }}
            icon={iconMap[education.icon]}
          >
            <h3 className="vertical-timeline-element-title">
              {education.stream}
            </h3>
            <h6 className="vertical-timeline-element-title">
              {education.major}
            </h6>
            <h5 className="vertical-timeline-element-subtitle">
              {education.school}
            </h5>
            <h6 className="vertical-timeline-element-subtitle">
              {education.location}
            </h6>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
