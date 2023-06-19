import { Link } from "react-router-dom";
import "./Newsletter.scss";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Want to get the latest updates, discount, offers, sales?
                </span>
            </div>
            <div className="form">
                <input type="text" placeholder="Email Address"/>
                <button className="btn">Sure!, why not?</button>
            </div>
            <div className="text">
                It will be in accordance with our <Link to="">Privacy Policy</Link>.
            </div>
            <div className="social-icons">
                <div className="icon">
                    <TwitterIcon />
                </div>
                <div className="icon">
                    <LinkedInIcon />
                </div>
                <div className="icon">
                    <GitHubIcon />
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
