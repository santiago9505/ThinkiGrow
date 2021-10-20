import React from "react";
import ProjectCard from "../components/ProjectCard";

//styles
import "../assets/styles/Project.css";

const Project = ({ name }) => {
  return (
    <section className="project">
      <div className="project__container">

        <section className="basic__data section">
          <figure className="project__image--container">
            <img src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/englishGroup.jpg?alt=media&token=941fb038-4216-42f0-80f0-5c29ede0fe82"
              alt="logo-project" />
          </figure>
          <div className="project__text--information">
            <h2>{name}</h2>
            <p>Rol del usuario</p>
            <p className="project__paragraph">“Deseamos practicar Inglés en un nivel A1 - B1, el listening, el
              writing y el reading”</p>
          </div>
        </section>

        <section className="information__data">
          <div className="information__data--oneSection">
            <article className="oneSection__groupData">
              <div className="oneSection__groupData--tittle">
                <h2>DATOS DEL GRUPO</h2>
              </div>
              <div className="oneSection__groupData--info">
                <div className="gruopData__info--date">
                  <div>
                    <div className="info__date--logoDate"></div>
                    <p>Fecha de inicio</p>
                  </div>
                  <p>Lunes, 04 de octubre de 2021</p>
                </div>
                <div className="gruopData__info--location">
                  <div>
                    <div className="info__date--logoLocation"></div>
                    <p>Lugar</p>
                  </div>
                  <p>Frankfurt, Colombia</p>
                </div>
                <div className="gruopData__info--admin">
                  <div>
                    <div className="info__date--logoAdmin"></div>
                    <p>Responsable del grupo</p>
                  </div>
                  <p>Juan Jose Pepito</p>
                </div>
                <div className="gruopData__info--adminEmail">
                  <div>
                    <div className="info__date--logoEmail"></div>
                    <p>Correo responsable del grupo</p>
                  </div>
                  <p>usuario@gmail.com</p>
                </div>
                <div className="gruopData__info--adminPhone">
                  <div>
                    <div className="info__date--logoPhone"></div>
                    <p>Telefono responsable del grupo</p>
                  </div>
                  <p>+57 3101234569</p>
                </div>
                <div className="gruopData__info--socialNet">
                  <div>
                    <div className="info__date--logoSocialNet"></div>
                    <p>Canales</p>
                  </div>
                  <div href="#" className="socialNet__discord">
                    <div className="socialNet__discord--logo"></div>
                  </div>
                  <div href="#" className="socialNet__whatsapp">
                    <div className="socialNet__whatsapp--logo"></div>
                  </div>
                </div>
              </div>
            </article>

            <article className="oneSection__groupGoals">
              <div className="oneSection__groupGoals--title">
                <h2>OBJETIVOS DEL GRUPO</h2>
              </div>
              <div className="oneSection__groupGoals--info">
                <h3>Objetivo General</h3>
                <p>Realizar actividades por competencias, que permitan al aprendizaje de la lengua inglesa, hasta un nivel B1</p>
                <h3>Objetivos Especificos</h3>
                <ul>
                  <li>Mejorar las competencias de listening mediante audiolibros, meetups, materiales y actividades relacionadas</li>
                  <li>Realizar actividades de Reading, con materiales escritos en lengua inglesa, tales como libros, articulos, noticias, entre otros</li>
                  <li>Realizar actividades de Reading, con materiales escritos en lengua inglesa, tales como libros, articulos, noticias, entre otros.</li>
                </ul>
              </div>
            </article>
          </div>

          <article className="information__data--secondSection">
            <div>
              <h2>PROGRAMACION MENSUAL</h2>
            </div>
            <div id="project__carousel">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
          </article>
        </section>

      </div>
    </section>
  );
};

export default Project;
