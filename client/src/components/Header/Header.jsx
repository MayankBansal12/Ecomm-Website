import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import "./Header.scss";


const Header = () => {
    return (
        <nav className="nav">
            <div className="toggle-bar" id="nav_toggle">
                <HiOutlineMenuAlt2 />
            </div>
            <div>
                <Link to="" className="nav-logo">MangoZone</Link>
            </div>
            <div className="menu" id="nav-menu">
                <ul className="nav-list">
                    <li className="list-item"><Link to="" className="nav-link">Home</Link></li>
                    <li className="list-item"><Link to="" className="nav-link">Woman</Link></li>
                    <li className="list-item"><Link to="" className="nav-link">Man</Link></li>
                    <li className="list-item"><Link to="" className="nav-link">About</Link></li>
                </ul>
            </div>
            <div className="extras">
                <BiSearchAlt />
                <BsCartFill />
                <span className="cart">
                    <BsHeart />
                </span>
            </div>
        </nav>
    );
};

export default Header;
