/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect,useState} from "react";
import ProjectCard from "../components/ProjectCard";
import { useParams } from "react-router";


//styles
import "../assets/styles/Project.css";

const Project = () => {

  const [communities, setCommunities] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const url = `https://thinkigrow-development-default-rtdb.firebaseio.com/communities/${id}.json`;
      const data = await fetch(url);
      const projects = await data.json();
      setCommunities(projects);
    };
    getData();
  }, []);

  return (
    <section className="project">
      <div className="project__container">

        <section className="basic__data">
          <figure className="project__image--container">
            <img src={communities.image}
              alt="logo-project" />
          </figure>
          <div className="project__text--information">
            <h2>{communities.name}</h2>
            <p>Rol del usuario</p>
            <p className="project__paragraph">{communities.description}</p>
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
                  <p>{communities.creator}</p>
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
                  <div className="info__socialNet--container">
                    <a href="#" className="socialNet--container--discord">
                      <div className="socialNet__discord--logo"></div>
                    </a>
                    <a href="#" className="socialNet--container--whatsapp">
                      <div className="socialNet__whatsapp--logo"></div>
                    </a>
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
