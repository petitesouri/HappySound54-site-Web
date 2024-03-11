import React from "react";

import Logo from "../images/Logo.png";

const Footer = () => {

    // const handleClick = (e) => {
    //     const buttonText = e.target.textContent;
    //     dispatch(FooterModalOpen(true, buttonText))       
    // };

    return (
        <footer>
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
        </footer>
    )
}

export default Footer;