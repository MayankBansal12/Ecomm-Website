import "./Banner.scss";
import banner from "../../../assets/banner2.jpg";

const Banner = () => {   
    return (
        <div className="home">
            <div className="home-primary">
                <h1 className="home-title reveal">Your Shopping <br /> Palace</h1>
                <div className="home-image">
                    <img src={banner} alt="banner" />
                </div>
            </div>
            <div className="home-secondary">
                <span className="scroll reveal">---Scroll Down</span>
                <span className="home-year reveal">2023</span>
            </div>
        </div>
    )
};

export default Banner;
