import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useParams } from "react-router";

//styles
import "../assets/styles/Project.css";
import Comunities from "../components/Comunities/Comunities";

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
  console.log(communities);

  return (
    <div className="project">
      <div className="project__container">
        <div className="basic__data section">
          <figure className="project__image--container">
            <img src={communities.image} alt="logo-project" />
          </figure>
          <article className="project__text--information">
            <h1>{communities.name}</h1>
            <h3>Rol de usuario</h3>
            <p className="project__paragraph">{communities.description}</p>
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
            <article value={communities.start} className="more__information">
              <p className="date">{communities.start}</p>
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
              {/* <p className="date complete">{communities.creator.name}</p> */}
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
              <p className="date complete"></p>
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
              <p className="date complete">max-members</p>
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
        <article>
          <h1>PROGRAMACIÓN MENSUAL</h1>
        </article>
        <div id="project__carousel" className="project__info--carousel">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
