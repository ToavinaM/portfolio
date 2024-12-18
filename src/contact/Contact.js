import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
    // État pour afficher/masquer le popup
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Fonction pour afficher le popup
    const showPopup = () => {
        setIsPopupVisible(true);
    };

    // Fonction pour fermer le popup
    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            {/* Bouton flottant "Contactez-moi" */}
            <button className="contact-btn" onClick={showPopup}>
                Contactez-moi
            </button>

            {/* Popup */}
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Contactez-nous</h2>
                        <p>Veuillez remplir le formulaire pour nous contacter.</p>
                        {/* Vous pouvez ajouter un formulaire ici */}
                        <button className="close-popup" onClick={closePopup}>
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
