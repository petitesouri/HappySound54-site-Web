import React from "react";

const Section = ({ className, dataClassname, titre, texte, children }) => {

  return (
    <section className={className} data-classname={dataClassname}>
      <article className={`${className}-article`}>
        {titre && <h2>{titre}</h2>}
        {texte && <p>{texte}</p>}
        {children}
      </article>
    </section>
  );
}

export default Section;
