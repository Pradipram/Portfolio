import React from 'react'
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

import "./project.css"
import { ProjectList } from '../../utils/ProjectList';
// import Project1 from "../../assets/image/project1.png"

const Project = ({toggle}) => {
  return (
    <div className="project" id='project'>
        <h1>Projects</h1>
        <div className="row">
                {
                    ProjectList.map(project =>(
                        <div className={toggle ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"} key={project.id}>
                            <div className='project-card'>
                                <img src={project.img_url} alt='project'/>
                                <div className="m-auto project-badge">
                                    {
                                        project.techStack.map((tech,index) =>(
                                            <span className='card-badge' key={index}>{tech}</span>
                                        ))
                                    }
                                </div>
                                <div className="card-body m-auto">
                                    <h2>{project.name}</h2>
                                </div>
                                <div className="project-button">
                                    <span className='github'> 
                                        <a href={project.github} target='_blank' rel='noreferrer'>GitHub</a>
                                        <FaGithub/>
                                    </span>
                                    <span className='live-url'>
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