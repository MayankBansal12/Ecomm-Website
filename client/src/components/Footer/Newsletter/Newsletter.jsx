import { Link } from "react-router-dom";
import "./Newsletter.scss";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Newsletter = () => {
    return (
        <div className="newsletter-section" id="newsletter">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Want to get the latest updates on discount, offers & more?
                </span>
            </div>
            <div className="form">
                <input type="email" placeholder="Email Address" required/>
                <button className="btn">Sure! Why not?</button>
            </div>
            <div className="text">
                It will be in accordance with our <Link to="">Privacy Policy</Link>.
            </div>
            <div className="social-icons">
                <Link className="icon" to="https://twitter.com/SimplerMayank"><TwitterIcon /></Link>
                <Link className="icon" to="https://www.linkedin.com/in/mayank-bansal-b14837247/"><LinkedInIcon /></Link>
                <Link className="icon" to="https://github.com/MayankBansal12"><GitHubIcon /></Link>
            </div>
        </div>
    )
};

export default Newsletter;
