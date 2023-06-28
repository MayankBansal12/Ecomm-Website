import "./Footer.scss";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="company-info">
                    <div className="footer-menu">
                        <h3>About</h3>
                        <p>
                            Your shopping palace and one stop solution to your needs and wants. Shop now and in case of any queries, write to us at
                            &nbsp;<Link className="email" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptJQGXRhtBDKQrMSSBQSTpKJHXQDBCbfGrtBKSLFlmxgvsVkCZMGvnqcbrkMWtgDgcLrN" target="_blank">mayankbansal125@gmail.com</Link>
                        </p>
                    </div>
                    <div className="footer-menu">
                        <h3>Contact</h3>
                        <ul>
                            <li>99/A, Apartment Name, __ Colony, Near Area, Delhi-200010</li>
                            <li>809062696356</li>
                            <li>mayankbansal125@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-menu">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/category/5">SmartPhones</Link></li>
                        <li><Link to="/category/8">Grocery</Link></li>
                        <li><Link to="/category/10">Clothes, Garments, Shoes</Link></li>
                        <li><Link to="/category/6">Laptops, Tablets</Link></li>
                        <li><Link to="/category/12">Electronic Appliances</Link></li>
                        <li><Link to="/category/9">Food, Beverages</Link></li>
                        <li><Link to="/category/7">Watches, Wireless earphones</Link></li>
                        <li><Link to="/category/11">Others</Link></li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Overview</h3>
                    <ul>
                        <li><Link to="">Your Orders</Link></li>
                        <li><Link to="">Sign up</Link></li>       
                        <li><Link to="">Careers</Link></li>    
                        <li><Link to="/">Sign up for Newsletter</Link></li>                 
                    </ul>
                </div>
            </footer>
            <div id="sub-footer">
                <ul>
                    <li><Link to="/about">Privacy Policy</Link></li>
                    <li><Link to="/about">Terms & Conditions</Link></li>
                    <li><Link to="/about">Security information</Link></li>
                    <li><Link target="_blank" className="icon" to="https://www.linkedin.com/in/mayank-bansal-b14837247/"><LinkedInIcon /></Link></li>
                    <li><Link target="_blank" className="icon" to="https://github.com/MayankBansal12"><GitHubIcon /></Link></li>
                    <li><Link target="_blank" className="icon" to="https://twitter.com/SimplerMayank"><TwitterIcon /></Link></li>
                </ul>
                <p className="copy-text">&copy; Copyright-ShopSense, Mayank Bansal.</p>
            </div>
        </div>
    );
};

export default Footer;