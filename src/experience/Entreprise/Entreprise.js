import React, { useState, useEffect } from 'react';
import './Entreprise.css';

export default function Entreprise() {
    const companies = [
        {
            src: "/logo/meah.png",
            alt: "Meah",
            projects: [
                {
                    projectTitle: "Développement d'application mobile",
                    projectDescription: "J'ai participé au développement d'une application mobile permettant la gestion des commandes en ligne pour une grande entreprise."
                },
                {
                    projectTitle: "Gestion de base de données",
                    projectDescription: "J'ai conçu un système de gestion de bases de données pour centraliser les informations de commandes et améliorer les performances."
                }
            ]
        },
        {
            src: "/logo/BICI.png",
            alt: "BICI",
            projects: [
                {
                    projectTitle: "Refonte du site e-commerce",
                    projectDescription: "Dans le cadre de cette mission, j'ai contribué à la refonte d'un site e-commerce pour améliorer l'expérience utilisateur et optimiser les ventes."
                },
                {
                    projectTitle: "Optimisation des performances web",
                    projectDescription: "J'ai travaillé sur l'optimisation des performances du site en améliorant la vitesse de chargement et l'accessibilité."
                }
            ]
        },
        {
            src: "/logo/spat.png",
            alt: "SPAT",
            projects: [
                {
                    projectTitle: "Système de gestion interne",
                    projectDescription: "J'ai développé un système de gestion des stocks pour une entreprise spécialisée dans la logistique, facilitant la gestion et le suivi des inventaires."
                }
            ]
        },
        {
            src: "/logo/mautourco.png",
            alt: "Mautourco",
            projects: [
                {
                    projectTitle: "Site de réservation de voyages",
                    projectDescription: "J'ai participé à la création d'une plateforme de réservation de voyages en ligne, permettant aux utilisateurs de réserver des tours et des circuits."
                }
            ]
        },
        {
            src: "/logo/proximity.png",
            alt: "Proximity",
            projects: [
                {
                    projectTitle: "Application de gestion de projets",
                    projectDescription: "Dans ce projet, j'ai contribué à la création d'une application web pour la gestion de projets, avec des fonctionnalités de suivi des tâches et de communication entre équipes."
                }
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const company = companies[currentIndex];

    return (
        <div className="entreprise">
            <h4 className="entreprise-title">Mes précédents employeurs :</h4>
            <div className="carousel-container">
                <button className="prev-button" onClick={prevSlide}>
                    &#10094;
                </button>
                <div className="carousel-item">
                    <div className="company-info">
                        <div className="company-logo">
                            <img src={company.src} alt={company.alt} />
                        </div>
                        <div className="project-description">
                            {company.projects.map((project, index) => (
                                <div key={index} className="project-detail">
                                    <h5 className="project-title">{project.projectTitle}</h5>
                                    <p className="project-description-text">{project.projectDescription}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="next-button" onClick={nextSlide}>
                    &#10095;
                </button>
                <div className="indicator-container">
                    {companies.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
