import React from "react";
import { Link } from "react-router-dom";

//styles
import "../../assets/styles/Hero.css";

const Hero = ({ isOpen, setOpen }) => {
  console.log(isOpen);
  return (
    <section className="hero">
      <article className="hero__text">
        <h1>ÚNETE, AYUDA O CREA EN COMUNIDAD</h1>
        <p className="hero__call-to-action">
          Únete a comunidades de aprendizaje, aporta a proyectos que cambien
          vidas, o crea un proyecto al que todos quieran sumarse
        </p>
        <div className="call__container">
          <Link to="/communities">
            <button class="call__to-action">ÚNETE A UNA COMUNIDAD</button>
          </Link>
        </div>
      </article>
      <div className="fig__container">
        <div className="group__container1">
          <figure className="fig__long fig__1">
            {/* <img
              className="hero__img--1"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/girl-studyng.png?alt=media&token=5284d3ba-f990-4fe0-9bda-88ccffd4088f"
              alt=""
            /> */}
          </figure>
          <figure className="fig__short fig__2"></figure>
        </div>
        <div className="group__container2">
          <figure className="fig__long fig__3"></figure>
          <figure className="fig__circle fig__4"></figure>
        </div>
        <div className="group__container3">
          <figure className="fig__long fig__5"></figure>
          <figure className="fig__short fig__6"></figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
