import React from "react";
import "./Service.css";

function Service() {
    const services = [
        {
            id: 1,
            title: "Développeur Front-End",
            description:
                "Spécialiste dans la création d'interfaces utilisateur modernes et attrayantes avec les dernières technologies.",
            icon: "👨‍💻",
        },
        {
            id: 2,
            title: "Développeur Back-End",
            description:
                "Conception d'applications robustes côté serveur, garantissant performance et sécurité.",
            icon: "🖥️",
        },
        {
            id: 3,
            title: "Concepteur UI/UX",
            description:
                "Conception de designs innovants et expérience utilisateur optimale pour vos applications.",
            icon: "🎨",
        },
        {
            id: 4,
            title: "Consultant en Cybersécurité",
            description:
                "Protection de vos systèmes et données contre les menaces et vulnérabilités.",
            icon: "🔒",
        },
        {
            id: 5,
            title: "Data Analyst",
            description:
                "Analyse des données pour fournir des insights stratégiques et améliorer vos performances.",
            icon: "📊",
        },
    ];

    return (
        <div className="App">
            <section className="services-section">
                <h2 className="section-title">Mes Services</h2>
                <p className="section-description">
                    Découvrez mes compétences et expertises pour répondre à vos besoins en
                    développement et en consultation IT.
                </p>
                <div className="services-container">
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Service;
