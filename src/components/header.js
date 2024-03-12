import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Modal from "../components/modal";
import Logo from "../images/Logo.png"
import SmileyMariage from "../images/Smiley1.png";
import SmileySoiree from "../images/Smiley2.png";
import SmileyEvenement from "../images/Smiley3.png";
import SmileyAccueil from "../images/Smiley4.png";

const Header = ({ siteTitle, excludeIndexZero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

const openModal = (type) => {
  setModalType(type);
  setIsOpen(true);
};

const closeModal = () => setIsOpen(false);

  const samplePageLinks = [
    {
      text: "Accueil Happy Sound 54",
      src: SmileyAccueil,
      url: "/",
      badge: false,
      description:
        "Retour à l'accueil de Happy Sound 54",
    },
    {
      text: "Mariage",
      src: SmileyMariage,
      url: "/mariage",
      badge: false,
      description:
        "Animations de votre mariage",
    },
    {
      text: "Soirées à thème",
      src: SmileySoiree,
      url: "/soirees",
      badge: false,
      description:
        "Animations de vos soirées",
    },
    {
      text: "Evènements professionnels",
      src: SmileyEvenement,
      url: "/evenement",
      badge: false,
      description:
        "Animations de vos évènements professionnels",
    }
    // { text: "TypeScript", url: "using-typescript" },
    // { text: "Server Side Rendering", url: "using-ssr" },
    // { text: "Deferred Static Generation", url: "using-dsg" },
  ];
  
  return (
  <header>
    <h1> {siteTitle || data.site.siteMetadata.title}</h1>
    
    <Link to="/" className="header-link">
      <img className="header-link__logo" src={Logo} alt="Logo" />
    </Link>
    <nav className="header-nav">
      {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            {excludeIndexZero && i === 0 ? null : (
              <li className="header-nav__link-button">
                <Link to={link.url}>
                  <img src={link.src} alt={link.description} />
                </Link>
              </li>
            )}
          </React.Fragment>
      ))}
    </nav>
    <button onClick={() => openModal('case3')}>CONTACT</button>
    <Modal isOpen={isOpen} onClose={closeModal} modalType={modalType} />
  </header>
)}

export default Header
