import React from "react";

import Logo from "../images/Logo.png";
import OWD from "../images/Logo Office Web Design.webp"

const Footer = () => {

    // const handleClick = (e) => {
    //     const buttonText = e.target.textContent;
    //     dispatch(FooterModalOpen(true, buttonText))       
    // };

    return (
        <footer>
            <div>
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
                <img src={OWD} alt="Office Web Design"/>
            </a>
        </footer>
    )
}

export default Footer;