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
                        <li><Link to="#">SmartPhones</Link></li>
                        <li><Link to="#">Grocery</Link></li>
                        <li><Link to="#">Clothes, Garments, Shoes</Link></li>
                        <li><Link to="#">Laptops, Tablets</Link></li>
                        <li><Link to="#">Electronic Appliances</Link></li>
                        <li><Link to="#">Food, Beverages</Link></li>
                        <li><Link to="#">Watches, Wireless earphones</Link></li>
                        <li><Link to="#">Others</Link></li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Overview</h3>
                    <ul>
                        <li><Link to="#">Your Orders</Link></li>
                        <li><Link to="#">Sign up</Link></li>       
                        <li><Link to="#">Careers</Link></li>    
                        <li><Link to="#newsletter">Sign up for Newsletter</Link></li>                 
                    </ul>
                </div>
            </footer>
            <div id="sub-footer">
                <ul>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms & Conditions</Link></li>
                    <li><Link to="#">Security information</Link></li>
                    <li><Link target="_blank" className="icon" to="https://www.linkedin.com/in/mayank-bansal-b14837247/"><LinkedInIcon /></Link></li>
                    <li><Link target="_blank" className="icon" to="https://github.com/MayankBansal12"><GitHubIcon /></Link></li>
                    <li><Link target="_blank" className="icon" to="https://twitter.com/SimplerMayank"><TwitterIcon /></Link></li>
                </ul>
                <p className="copy-text">&copy; Copyright Mayank Bansal.</p>
            </div>
        </div>
    );
};

export default Footer;

            //     <footer>
            //     <Link to="/" id="company-logo">MangoZone</Link>
            //     <div className="footer-menu">
            //         <p>
            //             Your shopping palace and one stop solution to your needs and wants. Shop now and in case of any queries, write to us at
            //             &nbsp;<Link className="email" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptJQGXRhtBDKQrMSSBQSTpKJHXQDBCbfGrtBKSLFlmxgvsVkCZMGvnqcbrkMWtgDgcLrN" target="_blank">mayankbansal125@gmail.com</Link>
            //         </p>
            //         <div>
            //             <ul>
            //                 <li className="list-item"><Link to="">About</Link></li>
            //                 <li className="list-item"><Link to="/">Contact</Link></li>
            //                 <li className="list-item"><Link to="/">Blog</Link></li>
            //                 <li className="list-item"><Link to="#newsletter">Sign up for Newsletter</Link></li>
            //             </ul>
            //             <ul className="socials">
            //                 <li><Link target="_blank" className="icon" to="https://www.linkedin.com/in/mayank-bansal-b14837247/"><LinkedInIcon /></Link></li>
            //                 <li><Link target="_blank" className="icon" to="https://github.com/MayankBansal12"><GitHubIcon /></Link></li>
            //                 <li><Link target="_blank" className="icon" to="https://twitter.com/SimplerMayank"><TwitterIcon /></Link></li>
            //             </ul>
            //         </div>
            //     </div>
            // </footer>
