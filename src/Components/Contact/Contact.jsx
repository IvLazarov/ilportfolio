import { Link } from "react-router-dom";
import '../Contact/Contact.scss';
import { MdOutlineMail } from "react-icons/md";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";


const Contact=()=>{
    return <div className="contact-container light-colors">
        <div className="contact">
            <div className="contact-title">
                <h2>Contact</h2>
            </div>

            <div className="contact-list">
                <div className="contact-item">
                    <MdOutlineMail style={{width: 30, height: 30}} />
                    <p>ivan.lazarov05@gmail.com</p>
                </div>
                
                <div className="contact-item">
                <RiLinkedinBoxLine style={{width: 30, height: 30}} />   
                    <p><Link to="https://www.linkedin.com/in/ivan-lazarov-7b5418229/" target="_blank"> 
                    
                    LinkedIn Account
                    </Link>
                    </p>
                </div>

                <div className="contact-item">
                    <FiGithub style={{width: 30, height: 30}} />
                    <p><Link to="https://github.com/IvLazarov" target="_blank">GitHub Account</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Contact;