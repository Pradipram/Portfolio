import { FC } from "react";
import { techstackStyle } from "../../../assets";
import { TechStackList } from "../../../utils";

interface TechstackProps {
    toggle: Boolean;
}

const Techstack: FC<TechstackProps> = ({ toggle }) => {
    return (
        <div className={techstackStyle.techstack} id="techstack">
            <h1>Tech Stack</h1>
            <div className="row">
                {TechStackList.map((tech) => (
                    <div
                        className={toggle ? "col-md-4" : "col-md-3"}
                        key={tech.id}
                    >
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
        </div>
    );
};

export default Techstack;
