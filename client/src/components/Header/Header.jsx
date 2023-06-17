import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect } from "react";

import "./Header.scss";


const Header = () => {

    useEffect(()=>{
        const navbar=document.getElementById("nav_toggle");
        navbar.addEventListener("click",()=>{
            const navmenu=document.getElementById("nav-menu");
            navmenu.classList.toggle("show");
        })
    })

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
                <span className="cart">
                    <BsCartFill />
                    <span>1</span>
                </span>
                <BsHeart />
            </div>
        </nav>
    );
};

export default Header;
