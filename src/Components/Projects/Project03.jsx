import "../Projects/ProjectsStyle.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Project03 = () => {
  return (
    <>
      <div className="project">
        <div className="project-info">
          <div className="project-date">
            <div className="month">November</div>
            <div className="year">2023</div>
          </div>

          <div className="project-name">
            <div className="name">Visual Media App</div>
            <div className="link">
              <Link to="https://visual-media-app.netlify.app" target="_blank">
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-description">
            <div className="sign">P-03</div>
            <div className="project-text">
              A film and TV show application that enables users to search for
              specific films, TV shows and people in film.
            </div>
          </div>
          <div className="project-image">
            <img
              src="/project images/visual-media-app-img.png"
              alt="project-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project03;
