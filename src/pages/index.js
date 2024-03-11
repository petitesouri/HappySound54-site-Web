import React, { useEffect } from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image"; 

import Header from "../components/header";
import Footer from "../components/footer"
import Section from "../components/section";
import Headband from "../components/headband";
import Avis from "../components/avis";
import Seo from "../components/seo";
import Music from "../components/music";
import "../styles/index.module.css"

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

  return (
  <>
  <Header siteTitle="Happy Sound 54"/>
  {/* <Layout>
     <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} 
  </Layout> */}
  <main>
    <Section 
      className="Intro" 
      dataClassname="background1"
      titre="Avec Deejay Fredowski passez un pur moment festif" 
      texte="Moi, c'est Fred, alias Deejay Fredowski. Cela fait maintenant plus de 10 ans que j'anime vos soirées dans le Grand-Est de la France." 
      >
      <p>ICI LIEN VERS LISTE MATOS ET PRESTATAIRES</p>
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
  </main>
  < Footer />
  </>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
