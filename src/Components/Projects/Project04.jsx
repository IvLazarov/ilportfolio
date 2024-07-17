import "../Projects/ProjectsStyle.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Project04 = () => {
  return (
    <>
      <div className="project">
        <div className="project-info">
          <div className="project-date">
            <div className="month">March</div>
            <div className="year">2023</div>
          </div>

          <div className="project-name">
            <div className="name">Movie Browser</div>
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
            <div className="sign">P-04</div>
            <div className="project-text">
            This is a simple game browser application that lets the user search games by title, genre and platform.
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

export default Project04;
