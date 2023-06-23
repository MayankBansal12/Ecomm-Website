import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from "react";

import "./Header.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

const Header = () => {
    const [showCart, setShowCart]=useState(false);
    const [showSearch, setShowSearch]=useState(false);

    useEffect(()=>{
        const navbar=document.getElementById("nav_toggle");
        navbar.addEventListener("click",()=>{
            const navmenu=document.getElementById("nav-menu");
            navmenu.classList.toggle("show");
        })
        window.addEventListener("scroll",()=>{
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let navEl=document.querySelector(".nav");
            if (scrollTop !== 0) {
                // User is not at the top of the page, add filter class
                navEl.classList.add('filter');
            }else{
                // User is at the top of the page, remove filter class
                navEl.classList.remove('filter');
            }
        });        
    })

    return (
        <>
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
                        <li className="list-item"><Link to="" className="nav-link">Shop</Link></li>
                        <li className="list-item"><Link to="" className="nav-link">Categories</Link></li>
                        <li className="list-item"><Link to="" className="nav-link">About</Link></li>
                    </ul>
                </div>
                <div className="extras">
                    <BiSearchAlt onClick={()=>setShowSearch(true)} />
                    <span className="cart" onClick={()=>setShowCart(true)} >
                        <BsCartFill />
                        <span>1</span>
                    </span>
                    <BsHeart />
                </div>
            </nav>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} /> }
        </>
    );
};

export default Header;
