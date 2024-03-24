import "../Home/Home.scss";
import { TypeAnimation } from 'react-type-animation';

const Home=()=>{
    return <div className="home-container dark-colors">
        <div className="portfolio">
        <div className="portfolio-owner">
        Ivan Lazarov
        </div>
        <div className="portfolio-type">
        <TypeAnimation 
        sequence={[
           'Web \nPortfolio' 
        ]}

        style={{whiteSpace: 'pre-line'}}
        speed={250}
        />  
        </div>
        </div>
        
    </div>
}

export default Home;