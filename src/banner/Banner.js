import React from "react";
import "./banner.css";
// import profilImage from "../../public/images/profil.png";
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">
                <h1>Votre IT Consultant</h1>
                <p>Transformez vos idées en solutions technologiques.</p>
            </div>
            {/* <div className="banner-right" style={{ backgroundImage: `url(${profilImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }} > */}
            <div className="banner-right">
                <h2>Explorez mon Portfolio</h2>
                <button>Contactez-moi</button>
            </div>
        </div>
    );
};

export default Banner;
