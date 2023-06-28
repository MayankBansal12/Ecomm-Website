import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";

import "./Header.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { Context } from "../../utils/context";

const Header = () => {
    const [showCart, setShowCart]=useState(false);
    const [showSearch, setShowSearch]=useState(false);
    const { count }=useContext(Context);

    useEffect(()=>{
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
    const showMenu=()=>{
        const menu=document.querySelector(".menu");
        if(menu?.classList.contains("show")){
            menu?.classList.remove("show");
        }else{
            menu?.classList.add("show");
        }
    }

    return (
        <>
            <nav className="nav">
                <div className="toggle-bar" id="nav_toggle">
                    <HiOutlineMenuAlt2 onClick={showMenu} />
                </div>
                <div>
                    <Link to="" className="nav-logo">MangoZone</Link>
                </div>
                <div className="menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="list-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="list-item"><Link to="/category/11" className="nav-link">Shop</Link></li>
                        <li className="list-item"><Link to="/about" className="nav-link">About</Link></li>
                    </ul>
                </div>
                <div className="extras">
                    <BiSearchAlt onClick={()=>setShowSearch(true)} />
                    <span className="cart" onClick={()=>setShowCart(true)} >
                        <BsCartFill />
                        { !!count && <span>{count}</span>}
                    </span>
                    {/* <button className="btn">Log In</button> */}
                </div>
            </nav>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} /> }
        </>
    );
};

export default Header;
