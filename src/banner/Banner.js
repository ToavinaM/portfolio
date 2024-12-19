import React from "react";
import "./banner.css";
// import profilImage from "../../public/images/profil.png";
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">
                <h4 className="fontTitle">Bonjour ! 👋, Je me nomme </h4>
                <p className="fontTitle"></p>
                <h1 className="fontTitle">Ranarilala Toavina Mario</h1>
                <h1 className="fontTitle">Votre IT Consultant</h1>
                <p>Transformez vos idées en solutions technologiques.</p>
            </div>
            {/* <div className="banner-right" style={{ backgroundImage: `url(${profilImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }} > */}
            <div className="banner-right">
               
                {/* <button>Contactez-moi</button> */}
            </div>
        </div>
    );
};

export default Banner;
