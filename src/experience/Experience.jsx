import React, { useEffect, useState } from "react";
import "./experience.css";

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);

    const technologies = [
        { src: "/logo/html.png", alt: "HTML" },
        { src: "/logo/css.png", alt: "CSS" },
        { src: "/logo/js.png", alt: "JavaScript" },
        { src: "/logo/php.png", alt: "PHP" },
        { src: "/logo/sass.png", alt: "SASS" },
        { src: "/logo/java.png", alt: "Java" },
        { src: "/logo/angular.png", alt: "Angular" },
        { src: "/logo/react.png", alt: "React" },
        { src: "/logo/mysql.png", alt: "MySQL" },
        { src: "/logo/postgresql.png", alt: "PostgreSQL" },
        { src: "/logo/mongodb.png", alt: "MongoDB" },
        { src: "/logo/bootstrap.png", alt: "Bootstrap" },
        { src: "/logo/github.png", alt: "GitHub" },
        { src: "/logo/linux.png", alt: "Linux" },
        { src: "/logo/node.png", alt: "Node.js" },
        { src: "/logo/photoshop.png", alt: "Photoshop" },
        { src: "/logo/ant.png", alt: "Ant Design" },
        { src: "/logo/figma.png", alt: "Figma" },
    ];
    const companies = [
        { src: "/logo/meah.png", alt: "Meah" },
        { src: "/logo/BICI.png", alt: "BICI" },
        { src: "/logo/spat.png", alt: "SPAT" },
        { src: "/logo/mautourco.png", alt: "Mautourco" },
        { src: "/logo/proximity.png", alt: "Proximity" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("experience");
            if (section && section.getBoundingClientRect().top < window.innerHeight) {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="experience">
            <div className="containerExperience">
                <div className="headExp">
                    <h3 className="title">Expérience</h3>
                    <p className="descAbout">
                        Cela fait environ 3 ans que je fais du développement web, et je suis
                        toujours désireux d'en apprendre davantage dans ce secteur en
                        constante évolution.
                    </p>
                </div>
                <div className="contents">
                    <div className="techno">
                        <h4 className="techno-title">QUELLES TECHNOLOGIES J'AI UTILISÉES :</h4>
                        <div className="icons">
                            {technologies.map((tech, index) => (
                                <img
                                    key={index}
                                    className={`iconSkills ${isVisible ? "animate" : ""}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                    src={tech.src}
                                    alt={tech.alt}
                                />
                            ))}
                        </div>
                    </div>
                    <hr className="trait" />
                    <div className="entreprise">
                        <h4 className="entreprise-title">OÙ J'AI TRAVAILLÉ :</h4>
                        <div className="containerWorked">
                            {companies.map((company, index) => (
                                <img
                                    key={index}
                                    className="worked"
                                    src={company.src}
                                    alt={company.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
