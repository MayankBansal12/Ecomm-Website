import { Link } from "react-router-dom";
import "./Banner.scss";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="home">
            <div className="home-primary">
                <h1 className="home-title">Your Shopping <br /> Palace</h1>
                <div className="home-image">
                    <img src={banner} alt="banner" />
                </div>
            </div>
            <div className="home-secondary">
                <Link to="" className="scroll">---Scroll Down</Link>
                <span className="home-year">2023</span>
            </div>
        </div>
    )
};

export default Banner;
