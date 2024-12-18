import React, { useState } from 'react';
import './ChatBot.css'; // Assurez-vous d'importer votre fichier CSS

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="chatbot-container">
            {/* Icône de chat flottant */}
            <div className="chatbot-icon" onClick={toggleChat}>
                <img src="/logo/chat.png" alt="Chat" />
            </div>

            {/* Fenêtre de chat */}
            {showChat && (
                <div className="chatbox">
                    <div className="chatbox-header">
                        <h3>Chatbot</h3>
                        <button className="close-btn" onClick={toggleChat}>X</button>
                    </div>
                    <div className="chatbox-body">
                        <div className="message bot-message">
                            <p>Bonjour ! 👋 Je suis ici pour vous aider. Découvrez mes services :</p>
                            <ul>
                                <li>Développement web front-end et back-end</li>
                                <li>Création d'applications mobiles</li>
                                <li>Design UX/UI et optimisation de l'expérience utilisateur</li>
                                <li>Conseils en stratégie numérique</li>
                            </ul>
                            <p>Que puis-je faire pour vous aujourd'hui ? 😊</p>
                        </div>
                    </div>
                    <div className="chatbox-footer">
                        <input type="text" placeholder="Écrivez votre message..." />
                        <button>Envoyer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
