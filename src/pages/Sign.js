import React from "react";

//styles
import "../assets/styles/Sign.css";

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign__square">
        <article className="sign__title--container">
          <h1>REGÍSTRATE</h1>{" "}
        </article>
        <form className="signup__form" action="">
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20185.svg?alt=media&token=b3d409d6-c2da-4483-9d87-c1bfcbde7aa9"
                alt="name-question"
              />{" "}
              Nombre completo
            </span>
            <input
              placeholder="Nombre y apellido"
              className="signup__input"
              type="text"
            />
          </label>
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20187.svg?alt=media&token=4ea1d4f6-aa34-4ccc-bba7-0f0c8dd57138"
                alt="email"
              />{" "}
              Correo Electrónico
            </span>
            <input placeholder="Email" className="signup__input" type="email" />
          </label>
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20189.svg?alt=media&token=110298f2-3c41-4c07-b0c3-5b5534f1fdcb"
                alt="number"
              />{" "}
              Número telefónico
            </span>
            <div className="signup__question--phone">
              <input placeholder="+57" className="indicative" type="tel" />
              <input placeholder="Número" type="tel" />
            </div>
          </label>
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/user-tie.svg?alt=media&token=d914223d-e081-4256-a59a-5c1069328b8d"
                alt="profesión"
              />{" "}
              Profesión
            </span>
            <input
              placeholder="Estudiante"
              className="signup__input"
              type="text"
            />
          </label>
          <span>¿Qué te gustaría hacer?</span>
          <select className="signup__input" name="signup" id="signup-select">
            <option className="signup__input" value="">
              --Selecciona una opción--
            </option>
            <option value="unirse">Unirme a una comunidad</option>
            <option value="crear">Crear un proyeto</option>
            <option value="aportar">Aportar a una causa social</option>
          </select>
          <button>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
