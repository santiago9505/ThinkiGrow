import React from "react";

//styles
import "../assets/styles/Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="project__container">
        <div className="basic__data section">
          <figure className="project__image--container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/englishGroup.jpg?alt=media&token=941fb038-4216-42f0-80f0-5c29ede0fe82"
              alt="logo-project"
            />
          </figure>
          <article className="project__text--information">
            <h1>NOMBRE COMUNIDAD</h1>
            <h3>Rol de usuario</h3>
            <p className="project__paragraph">
              “Deseamos practicar Inglés en un nivel A1 - B1, el listening, el
              writing y el reading”
            </p>
          </article>
        </div>
        <article>
          <h1>DATOS DEL GRUPO</h1>
        </article>
        <div className="section more__data">
          <article>
            <h3 className="more__data--items">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Frame%2019.svg?alt=media&token=b124f86c-7165-4b21-924f-3f2257a462a7"
                alt="logo-date"
              />{" "}
              Fecha de inicio
            </h3>
            <article className="more__information">
              <p className="date">Lunes</p>
              <p className="date">04</p>
              <p className="date">OCT</p>
            </article>
          </article>
          <article>
            <h3 className="more__data--items">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/user-tie%20(1).svg?alt=media&token=7674c92c-b5be-4f1f-90f1-1c4f41399005"
                alt="logo-date"
              />{" "}
              Creador del grupo
            </h3>
            <article className="more__information">
              <p className="date complete">Pepito Perez</p>
            </article>
          </article>
          <article>
            <h3 className="more__data--items">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20187.svg?alt=media&token=4ea1d4f6-aa34-4ccc-bba7-0f0c8dd57138"
                alt="logo-date"
              />{" "}
              Correo electrónico
            </h3>
            <article className="more__information">
              <p className="date complete">pepitoperez@gmail.com</p>
            </article>
          </article>
          <article>
            <h3 className="more__data--items">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group.svg?alt=media&token=d2f617dd-7c8e-49be-9540-a3646258c098"
                alt="logo-date"
              />{" "}
              Participantes
            </h3>
            <article className="more__information">
              <p className="date complete">6 participantes</p>
            </article>
          </article>
          <article>
            <h3 className="more__data--items">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Frame%2022.svg?alt=media&token=68458c3c-5805-4aaf-9aac-c864349e5ba8"
                alt="logo-date"
              />{" "}
              Canales
            </h3>
            <article className="more__information channels">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20236.svg?alt=media&token=e3cc355a-e3fb-4265-8117-57cd70506482"
                alt="whatsapp"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Discord%20-%20Negative.svg?alt=media&token=b21f05d9-4cf1-45cd-8075-3272598791a1"
                alt="discord"
              />
            </article>
          </article>
        </div>
        <div className="section about__project">
          <article className="general__goal">
            <h3>Objetivo General</h3>
            <p>
              Realizar actividades por competencias, que permitan al aprendizaje
              de la lengua inglesa, hasta uin nivel B1
            </p>
          </article>
          <article className="specific__goals">
            <h3>Objetivos Específicos</h3>
            <p>
              Mejorar las competencias de listening mediante audiolibros,
              meetups, y materiales y actividades relacionadas
            </p>
            <p>
              Realizar actividades de Reading, con materiales escritos en lengua
              inglesa, tales como libros, artículos, noticias, entre otros
            </p>
            <p>
              Realizar actividades de Reading, con materiales escritos en lengua
              inglesa, tales como libros, artículos, noticias, entre otros
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Project;