import React from "react";

const Section = ({ className, dataClassname, titre, texte, children }) => {

  return (
    <section className={className} data-classname={dataClassname}>
      {/* Affichage du titre */}
      {titre && <h2>{titre}</h2>}

      {/* Affichage du texte */}
      {texte && <p>{texte}</p>}

      {/* Affichage des enfants (slider, card, feed) */}
      {children}
    </section>
  );
}

export default Section;
