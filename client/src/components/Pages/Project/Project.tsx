import React, { FC } from 'react'
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

import { ProjectList } from '../../../utils';
import { projectStyle } from '../../../assets';

interface ProjectProps {
    toggle: Boolean;
}

const Project: FC<ProjectProps> = ({toggle}) => {
  return (
    <div className={projectStyle.project} id='project'>
        <h1>Projects</h1>
        <div className="row">
                {
                    ProjectList.map(project =>(
                        <div className={toggle ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"} key={project.id}>
                            <div className={projectStyle.projectCard}>
                                <img src={project.img_url} alt='project'/>
                                <div className={`m-auto ${projectStyle.projectBadge}`}>
                                    {
                                        project.techStack.map((tech,index) =>(
                                            <span className={projectStyle.cardBadge} key={index}>{tech}</span>
                                        ))
                                    }
                                </div>
                                <div className={`card-body m-auto ${projectStyle.cardBody}`}>
                                    <h2>{project.name}</h2>
                                </div>
                                <div className={projectStyle.projectButton}>
                                    <span className={projectStyle.github}> 
                                        <a href={project.github} target='_blank' rel='noreferrer'>GitHub</a>
                                        <FaGithub/>
                                    </span>
                                    <span className={projectStyle.liveUrl}>
                                        <a href={project.live_url} target='_blank' rel='noreferrer'>Live Url</a>
                                        <VscLiveShare />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default Project