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
import FacebookPost from "../components/facebookPost";


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const appId = process.env.FB_APP_ID;


const IndexPage = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.FB !== 'undefined') {
      window.FB.api(
        `/${appId}/feed`, 
        function (response) {
          if (response && !response.error) {
            setPosts(response.data);
          }
        }
      );
    }
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Effectuer la requête GET vers l'API Graph de Facebook
  //       const response = await fetch(`https://graph.facebook.com/v19.0/me?fields=feed{from,created_time,message,child_attachments,reactions}&access_token="mettre le user token"`);
  //       if (!response.ok) {
  //         throw new Error('Erreur lors de la récupération des données Facebook');
  //       }
  //       const data = await response.json();
  //       // Extraire les posts de la réponse
  //       const fetchedPosts = data.feed.data;
  //       // Mettre à jour l'état avec les posts récupérés
  //       setPosts(fetchedPosts);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   // Appeler la fonction fetchData pour récupérer les posts
  //   fetchData();
  // }, []); // Assurez-vous de passer les dépendances nécessaires à useEffect

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
  <Layout >
  <Section 
      className="Intro" 
      dataClassname="background1"
      titre="Avec Deejay Fredowski passez un pur moment festif" 
      >
      <div className="Intro-article__text">
        <p>Bienvenue sur le site de Happy Sound 54, votre DJ professionnel pour des soirées inoubliables!</p>
        <p>Avec une passion débordante pour la musique et une expertise dans l'animation d'événements, nous sommes là pour donner  vie à vos fêtes, mariages, anniversaires et tout autre événement spécial.
        <br/>Notre mission est de créer une ambiance enivrante et de faire vibrer vos invités sur le dancefloor. Avec une vaste sélection de musiques adaptées à tous les goûts et une expérience riche dans le domaine, nous garantissons une soirée mémorable, où chaque moment sera une célébration de la musique et de la joie.
        <br/>Notre service est personnalisé, en accord avec vos préférences musicales et le style de votre événement. Notre équipement de pointe et notre expertise technique garantissent un son de haute qualité et une performance sans faille, pour que vous puissiez profiter pleinement de chaque instant de votre soirée.</p>
        <p>Faites confiance à Happy Sound 54 pour transformer vos événements en des moments inoubliables. <br/>Contactez-nous dès aujourd'hui pour réserver votre date et laissez-nous créer ensemble une soirée exceptionnelle!</p>
      </div>
      <p className="Intro-article__list">
        Liste 
          <button onClick={handleParagraphClick}>
            du matériel
          </button> 
        et 
          <button onClick={handleParagraphClick}>
            des prestataires
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
        <p className="ambiance-text">Cliquez pour écouter un extrait</p>
        <Music />
        <Headband/>
    </Section>    
    <Section 
      className="news" 
      dataClassname="background1"
      titre="DERNIERES NOUVELLES"
      >
      <div className="facebook-posts">
        <p>Suivez-moi sur Facebook</p>
        {posts.map((post, index) => (
          <FacebookPost key={index} post={post} />
        ))}
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
