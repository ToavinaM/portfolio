import React, { useEffect, useState } from "react";
import "./experience.css";
import Entreprise from "./Entreprise/Entreprise";

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
        { src: "/logo/docker.png", alt: "Linux" },
        { src: "/logo/python.png", alt: "python" },
        { src: "/logo/anaconda.png", alt: "anaconda" },
        { src: "/logo/photoshop.png", alt: "Photoshop" },
        { src: "/logo/ant.png", alt: "Ant Design" },
        { src: "/logo/figma.png", alt: "Figma" },
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
                        <h4 className="techno-title">Mes technologies récentes :</h4>
                        <div className="icons">
                            {technologies.map((tech, index) => (
                                <img
                                    key={index}
                                    className={`iconSkills ${isVisible ? "animate" : ""}`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                    src={tech.src}
                                    alt={tech.alt}
                                />
                            ))}
                        </div>
                    </div>
                    <hr className="trait" />
                  
                    <Entreprise></Entreprise>

                </div>
            </div>
        </div>
    );
}
