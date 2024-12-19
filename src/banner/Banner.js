import React from "react";
import "./banner.css";
// import profilImage from "../../public/images/profil.png";
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">
                <h1 className="fontTitle stroke">Bonjour !</h1>
                <h2 className="fontTitle">Je m'appelle</h2>
                <h2 className="fontTitle">Ranarilala Toavina Mario</h2>
                <h3 className="fontTitle"> " Ensemble, donnons vie à vos projets avec des solutions innovantes "</h3>
            </div>
            {/* <div className="banner-right" style={{ backgroundImage: `url(${profilImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }} > */}
            <div className="banner-right">
               
                {/* <button>Contactez-moi</button> */}
            </div>
        </div>
    );
};

export default Banner;
