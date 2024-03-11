/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Happy Sound 54, animez vos soirées à Toul, Nancy et toute la région Grand-Est de la France`,
    description: `Je décris ici mon site, cette description s'affichera dans les résultats de recherche.`,
    author: `Office Web Design`,
    siteUrl: `https://happysound54.fr/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`, // vous pouvez spécifier les polices que vous souhaitez utiliser ici
          `source sans pro\:300,400,400i,700` // vous pouvez également spécifier les styles et variantes de police
        ],
        display: 'swap' // Optionnel : permet de charger les polices en mode d'affichage différé pour améliorer les performances
      }
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`, // Emplacement où la sitemap sera générée. Par défaut : /sitemap.xml
    //     exclude: [`/404`, `/404.html`, `/offline-plugin-app-shell-fallback`], // Pages à exclure de la sitemap
    //     createLinkInHead: true, // Ajoute un lien vers la sitemap dans la section <head> de votre site
    //     serialize: ({ site, allSitePage }) =>
    //       allSitePage.edges.map(edge => ({
    //         url: site.siteMetadata.siteUrl + edge.node.path,
    //         changefreq: `daily`,
    //         priority: 0.7,
    //       })),
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happy Sound 54`,
        short_name: `Happy Sound 54`,
        start_url: `/`,
        background_color: `#3A353A`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#3A353A`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
