import "../Projects/ProjectsStyle.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Project02 = () => {
  return (
    <>
      <div className="project">
        <div className="project-info">
          <div className="project-date">
            <div className="month">June</div>
            <div className="year">2024</div>
          </div>

          <div className="project-name">
            <div className="name">Game Browser V2</div>
            <div className="link">
              <Link
                to="https://game-browser-v2.netlify.app/"
                target="_blank"
              >
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-description">
            <div className="sign">P-02</div>
            <div className="project-text">
            A game browser that enables users to search games 
            by name, genre, platform, and publsher. 
            Light and dark mode available.
            </div>
          </div>
          <div className="project-image">
            <img
              src="/project images/game-browser-v2.png"
              alt="project-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project02;
