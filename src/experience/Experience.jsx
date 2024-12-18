import React from 'react';
import './experience.css';

export default function Experience() {
    return (
        <div id='experience'>
            <div className="containerExperience">
                <div className="headExp">
                    <h3 className='title'>Expérience</h3>
                    <p className='descAbout'>Cela fait environ 3 ans que je fais du développement web, et je suis toujours désireux d'en apprendre davantage dans ce secteur en constante évolution.</p>
                </div>
                <div className="contents">
                    <div className="techno">
                        <h4 className='techno-title'>QUELLES TECHNOLOGIES J'AI UTILISÉES :</h4>
                        <div className='icons'>
                            <img className='iconSkills' src="/logo/html.png" alt="HTML" />
                            <img className='iconSkills' src="/logo/css.png" alt="CSS" />
                            <img className='iconSkills' src="/logo/js.png" alt="JavaScript" />
                            <img className='iconSkills' src="/logo/php.png" alt="PHP" />
                            <img className='iconSkills' src="/logo/sass.png" alt="SASS" />
                            <img className='iconSkills' src="/logo/java.png" alt="Java" />

                            <img className='iconSkills' src="/logo/angular.png" alt="Angular" />
                            <img className='iconSkills' src="/logo/react.png" alt="React" />
                            <img className='iconSkills' src="/logo/mysql.png" alt="MySQL" />
                            <img className='iconSkills' src="/logo/postgresql.png" alt="PostgreSQL" />
                            <img className='iconSkills' src="/logo/mongodb.png" alt="MongoDB" />
                            <img className='iconSkills' src="/logo/bootstrap.png" alt="Bootstrap" />
                            <img className='iconSkills' src="/logo/github.png" alt="GitHub" />
                            <img className='iconSkills' src="/logo/linux.png" alt="Linux" />
                            <img className='iconSkills' src="/logo/node.png" alt="Node.js" />
                            <img className='iconSkills' src="/logo/photoshop.png" alt="Photoshop" />
                            <img className='iconSkills' src="/logo/ant.png" alt="Ant Design" />
                            <img className='iconSkills' src="/logo/figma.png" alt="Figma" />
                        </div>
                    </div>
                    <hr className='trait'/>
                    <div className="entreprise">
                        <h4 className='entreprise-title'>OÙ J'AI TRAVAILLÉ :</h4>
                        <div className='containerWorked'>
                            <img className='worked' src="/logo/meah.png" alt="Meah" />
                            <img className='worked' src="/logo/BICI.png" alt="BICI" />
                            <img className='worked' src="/logo/spat.png" alt="Meah" />
                            <img className='worked' src="/logo/mautourco.png" alt="Mautourco" />
                            <img className='worked' src="/logo/proximity.png" alt="Proximity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
