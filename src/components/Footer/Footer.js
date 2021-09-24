import React from "react";

//styles
import "../../assets/styles/Footer.css";

//icons
import Facebook from "../../assets/static/facebook-icon.png";
import Instagram from "../../assets/static/instagram-icon.png";
import Twitter from "../../assets/static/twitter-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <article>
        <h1>THINKIGROW</h1>
      </article>
      <div className="social__media">
        <figure>
          <img className="facebook--icon" src={Facebook} alt="facebook" />
        </figure>
        <figure>
          <img className="instagram--icon" src={Instagram} alt="twitter" />
        </figure>
        <figure>
          <img className="twitter--icon" src={Twitter} alt="instagram" />
        </figure>
      </div>
      <ul className="footer__items">
        <div className="footer__group">
          <li>
            <a className="footer__title" href="">
              Conecta ahora
            </a>
          </li>
          <li>
            <a href="">Únete a una comunidad</a>
          </li>
          <li>
            <a href="">Apoya a causas</a>
          </li>
          <li>
            <a href="">Crea un Proyecto</a>
          </li>
        </div>
        <div className="footer__group">
          <li>
            <a className="footer__title" href="">
              Conócenos
            </a>
          </li>
          <li>
            <a href="">Regístrate</a>
          </li>
          <li>
            <a href="">Contáctanos</a>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
