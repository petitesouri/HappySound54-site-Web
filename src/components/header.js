import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
// import { Helmet } from "react-helmet"

import Logo from "../images/Logo.png"
import SmileyMariage from "../images/Smiley1.png";
import SmileySoiree from "../images/Smiley2.png";
import SmileyEvenement from "../images/Smiley3.png";
// import ContactForm from '../components/ContactForm';

const Header = ({ siteTitle }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  const handleClickContact = () => {
    setShowContactForm(true);
  };

  // const handleCloseContactForm = () => {
  //   setShowContactForm(false);
  // };
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const samplePageLinks = [
    {
      text: "Mariage",
      src: SmileyMariage,
      url: "mariage",
      badge: false,
      description:
        "Animations de votre mariage",
    },
    {
      text: "Soirées à thème",
      src: SmileySoiree,
      url: "soirees",
      badge: false,
      description:
        "Animations de vos soirées",
    },
    {
      text: "Evènements professionnels",
      src: SmileyEvenement,
      url: "evenements",
      badge: false,
      description:
        "Animations de vos évènements professionnels",
    },
    // { text: "TypeScript", url: "using-typescript" },
    // { text: "Server Side Rendering", url: "using-ssr" },
    // { text: "Deferred Static Generation", url: "using-dsg" },
  ];

  return (
  <header>
    <h1> {siteTitle || data.site.siteMetadata.title}</h1>
    {/* <Helmet>
      <html lang="fr" />
      {/* Ajouter d'autres éléments head ici au besoin
    </Helmet> */}
    
    <Link to="/" className="header-link">
      <img className="header-link__logo" src={Logo} alt="Logo" />
    </Link>
    <nav className="header-nav">
      {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <li className="header-nav__link-button">
              <Link to={link.url}>
                <img src={link.src} alt={link.description}/>
              </Link>
            </li>
            {/* {i !== samplePageLinks.length - 1 } */}
          </React.Fragment>
      ))}
    </nav>
    <button onClick={handleClickContact}>CONTACT</button>
    {/* {showContactForm && <div className="overlay" onClick={handleCloseContactForm}>
        <div className="modal">
        <button className="modal-close" onClick={handleCloseContactForm}>&times;</button>
            <ContactForm />
        </div>
    </div>} */}
  </header>
)}

export default Header
