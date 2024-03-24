import "../Projects/ProjectsStyle.scss";
import Project01 from "../Projects/Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";

const Projects = () => {
  return (
    <div className="project-container light-colors">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <Project01 />
      <Project02 />
      <Project03 />
      <Project04 />
    </div>
  );
};

export default Projects;
