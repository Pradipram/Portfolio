import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
import { EducationList } from '../../utils/EducationList';

const Education = () => {
  return (
    <div className="education">
      <h1>Education Details</h1>
      <VerticalTimeline>
      {
        EducationList.map((education,index)=>(
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={education.date}
              iconStyle={{ background: 'white', color: 'black' }}
              icon={<education.icon/>}
            >
              <h3 className="vertical-timeline-element-title">{education.stream}</h3>
              <h6 className="vertical-timeline-element-title">{education.major}</h6>
              <h5 className="vertical-timeline-element-subtitle">{education.school}</h5>
              <h6 className="vertical-timeline-element-subtitle">{education.location}</h6>
              </VerticalTimelineElement>
        ))
      }

      </VerticalTimeline>
    </div>
  )
}

export default Education