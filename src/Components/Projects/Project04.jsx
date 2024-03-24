import "../Projects/ProjectsStyle.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Project04=()=>{
    return <>
        <div className="project">
            <div className="project-info">
                <div className="project-date">
                    <div className="month">
                        May 
                    </div>
                    <div className="year">
                        2022
                    </div>
                </div>
                
                <div className="project-name">
                    <div className="name">
                    Movie Browser
                    </div>
                    <div className="link">
                    <Link to="https://movie-browser-react.netlify.app" target="_blank" >
                    <FiArrowRight />
                    </Link>
                    </div>
                </div>
            </div>

        <div className="project-details">
          <div className="project-description">
            <div className="sign">P-04</div>
            <div className="project-text">
            A movie browser application that
            enables users to search for specific films, 
            and view their descriptions.
            </div>
          </div>
            <div className="project-image">
            <img src="/project images/movie-browser-app-img.png" alt="project-image" />
            </div>  
        </div>

        </div>
    </>
}

export default Project04;