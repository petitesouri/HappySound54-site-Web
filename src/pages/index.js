import React, { useEffect, useState } from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image"; 

import Layout from "../components/layout"
import Section from "../components/section";
import Headband from "../components/headband";
import Avis from "../components/avis";
import Seo from "../components/seo";
import Music from "../components/music";
import Modal from "../components/modal";

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const body = document.querySelector('body');
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        const sectionMiddle = sectionRect.top + sectionRect.height / 2;
        const newClassName = section.getAttribute('data-classname');

        if (sectionMiddle <= windowHeight / 2) {
          body.className = newClassName || '';  
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleParagraphClick = (event) => {
    const text = event.target.textContent.toLowerCase();
    if (text.includes('matériel')) {
        openModal('case1');
    } else if (text.includes('prestataire')) {
        openModal('case2');
    }
};

  return (
  <>
  <Layout excludeIndexZero>
  <Section 
      className="Intro" 
      dataClassname="background1"
      titre="Avec Deejay Fredowski passez un pur moment festif" 
      texte="Bienvenue sur le site de Happy Sound 54, votre DJ professionnel pour des soirées inoubliables! Avec une passion débordante pour la musique et une expertise dans l'animation d'événements, nous sommes là pour donner vie à vos fêtes, mariages, anniversaires et tout autre événement spécial.

      Notre mission est de créer une ambiance enivrante et de faire vibrer vos invités sur le dancefloor. Avec une vaste sélection de musiques adaptées à tous les goûts et une expérience riche dans le domaine, nous garantissons une soirée mémorable, où chaque moment sera une célébration de la musique et de la joie.
      
      En tant que DJ professionnel, nous nous engageons à offrir un service personnalisé, en accord avec vos préférences musicales et le style de votre événement. Notre équipement de pointe et notre expertise technique garantissent un son de haute qualité et une performance sans faille, pour que vous puissiez profiter pleinement de chaque instant de votre soirée.
      
      Faites confiance à Happy Sound 54 pour transformer vos événements en des moments inoubliables. Contactez-nous dès aujourd'hui pour réserver votre date et laissez-nous créer ensemble une soirée exceptionnelle!" 
      >
      <p>
        Lien vers 
          <button onClick={handleParagraphClick}>
            matériel
          </button> 
        et 
          <button onClick={handleParagraphClick}>
            prestataires
          </button>
      </p>
    </Section>
    <Section 
      className="avis" 
      dataClassname="background2"
      titre="AVIS"
    >
      <Avis/>
    </Section>
    <Section 
      className="ambiance"
      dataClassname="background3"
      titre="AMBIANCES" 
      >
        <Music />
        <Headband/>
    </Section>    
    <Section 
      className="news" 
      dataClassname="background1"
      titre="DERNIERES NOUVELLES"
      >
      <div className="news-cards">
        <p>Suivez-moi sur Facebook</p>
        {/* <FeedFacebook /> */}
      </div> 
    </Section>
    <Modal isOpen={isOpen} onClose={closeModal} modalType={modalType} /> 
  </Layout>
  </>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
