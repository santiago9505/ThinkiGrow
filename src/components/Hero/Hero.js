import React from "react";
//styles
import "../../assets/styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__text">
        <h1>ÚNETE, AYUDA O CREA EN COMUNIDAD</h1>
        <p className="hero__call-to-action">
          Únete a comunidades de aprendizaje, aporta a proyectos que cambien
          vidas, o crea un proyecto al que todos quieran sumarse
        </p>
      </article>
      <div className="fig__container">
        <figure className="fig__1"></figure>
        <figure className="fig__2"></figure>
        <figure className="fig__3"></figure>
        <figure className="fig__4"></figure>
      </div>
    </section>
  );
};

export default Hero;
