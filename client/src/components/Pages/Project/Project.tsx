import React, { FC, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

// import { ProjectList } from "../../../utils";
import { projectStyle } from "../../../assets";
import { Button } from "@mui/material";
import axios from "axios";

interface ProjectProps {
  toggle: Boolean;
  loggedIn: Boolean;
}

interface ProjectTypes {
  id: number;
  name: string;
  img_url: string;
  techStack: string[];
  github: string;
  live_url: string;
}

const Project: FC<ProjectProps> = ({ toggle, loggedIn }) => {
  const [ProjectList, setProjectList] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get("/get-project");
        setProjectList(res.data.project);
      } catch (err) {
        console.log(err);
      }
    };
    getProject();
  }, []);

  return (
    <div className={projectStyle.project} id="project">
      <h1>Projects</h1>
      <div className="row">
        {ProjectList.map((project) => (
          <div
            className={toggle ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"}
            key={project.id}
          >
            <div className={projectStyle.projectCard}>
              <img src={project.img_url} alt="project" />
              <div className={`m-auto ${projectStyle.projectBadge}`}>
                {project.techStack.map((tech, index) => (
                  <span className={projectStyle.cardBadge} key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={`card-body m-auto ${projectStyle.cardBody}`}>
                <h2>{project.name}</h2>
              </div>
              <div className={projectStyle.projectButton}>
                <span className={projectStyle.github}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <FaGithub />
                </span>
                <span className={projectStyle.liveUrl}>
                  <a href={project.live_url} target="_blank" rel="noreferrer">
                    Live Url
                  </a>
                  <VscLiveShare />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loggedIn && (
        <Button
          href="/add-project"
          variant="contained"
          sx={{ marginLeft: "48%", marginBottom: "5px" }}
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default Project;
