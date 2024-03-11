/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

// Styles

export const onClientEntry = () => {
    // Créer un lien pour charger votre fichier de style CSS
    const link = document.createElement("link")
    link.href = "/main.css"  // Chemin vers votre fichier CSS
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }
  

// Polices Google-font

// import React from 'react'

// export const onClientEntry = () => {
//   const link = document.createElement("link")
//   link.href = "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Hurricane&display=swap"
//   link.rel = "stylesheet"
//   document.head.appendChild(link)
// }
