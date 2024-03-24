import "../Projects/ProjectsStyle.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Project02 = () => {
  return (
    <>
      <div className="project">
        <div className="project-info">
          <div className="project-date">
            <div className="month">March</div>
            <div className="year">2023</div>
          </div>

          <div className="project-name">
            <div className="name">Game Browser</div>
            <div className="link">
              <Link
                to="https://simple-game-browser.netlify.app/"
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
              A game browser application that enables users to search for
              specific games by title, genre and platform.
            </div>
          </div>
          <div className="project-image">
            <img
              src="/project images/game-browser-app-img.png"
              alt="project-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project02;
