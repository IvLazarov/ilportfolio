import "../Projects/ProjectsStyle.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Project01=()=>{
    return <>
        <div className="project">
            <div className="project-info">
                <div className="project-date">
                    <div className="month">
                        March
                    </div>
                    <div className="year">
                        2024
                    </div>
                </div>
                
                <div className="project-name">
                    <div className="name">
                    Crypto App
                    </div>
                    <div className="link">
                    <Link to="https://simplecryptoapp.netlify.app/" target="_blank" >
                    <FiArrowRight />
                    </Link>
                    </div>
                </div>
            </div>

        <div className="project-details">
          <div className="project-description">
            <div className="sign">P-01</div>
            <div className="project-text">
            A simple crypto app that enables users to 
            view trending coins and search for specific
            cryptocurrencies. 
            </div>
          </div>
            <div className="project-image">
            <img src="/project images/crypto-app-img.png" alt="project-image" />
            </div>  
        </div>

        </div>
    </>
}

export default Project01;