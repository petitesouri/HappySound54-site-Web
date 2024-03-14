import React from "react";

import Logo from "../images/Logo-HS54.png";
import OWD from "../images/Logo-OWD.webp"

const Footer = () => {

    // const handleClick = (e) => {
    //     const buttonText = e.target.textContent;
    //     dispatch(FooterModalOpen(true, buttonText))       
    // };

    return (
        <footer>
            <div className="footer-section">
                <section className="footer-left-section">
                    <ul>
                        <li>N°SIRET : 887 926 905 00019</li>
                        <li>e-mail : chefenski@orange.fr</li>
                        <li>Tél : 06 06 06 06 06</li>
                    </ul>
                </section>    
                <img src={Logo} alt="Happy Sound 54" />       
                <section className="footer-right-section">
                    <ul>                
                        <li>
                            Mentions légales
                        </li>
                        <li>
                            CGU
                        </li>                   
                    </ul>
                </section>
            </div>
            <a href="https://officewebdesign.fr/" target="blank" rel="noopener noreferrer">
                Site réalisé par
                <img className="logo-OWD" src={OWD} alt="Office Web Design"/>
            </a>
        </footer>
    )
}

export default Footer;