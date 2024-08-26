import { FC } from "react";
import { techstackStyle } from "../../../assets";
import { TechStackList } from "../../../utils";
import { Button } from "@mui/material";

interface TechstackProps {
  toggle: Boolean;
  loggedIn: Boolean;
}

const handleClick = () => {
  alert("Change in code to make changes");
};

const Techstack: FC<TechstackProps> = ({ toggle, loggedIn }) => {
  return (
    <div className={techstackStyle.techstack} id="techstack">
      <h1>Tech Stack</h1>
      <div className="row">
        {TechStackList.map((tech) => (
          <div className={toggle ? "col-md-4" : "col-md-3"} key={tech.id}>
            <div className={`card m-2 ${techstackStyle.techCard}`}>
              <div className="card-content">
                <div className="card-body">
                  <div className={techstackStyle.techItem}>
                    <tech.icon />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loggedIn && (
        <Button
          variant="contained"
          sx={{ marginLeft: "48%", marginBottom: "5px" }}
          onClick={handleClick}
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default Techstack;
