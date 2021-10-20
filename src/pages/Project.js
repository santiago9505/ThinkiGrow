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
          <div>
            <article>
              <div>
                <h2>DATOS DEL GRUPO</h2>
              </div>
              <div>
                
              </div>
            </article>

            <article>
              <div></div>
              <div></div>
            </article>
          </div>

          <article>
            <div></div>
            <div></div>
          </article>
        </section>

      </div>
    </section>
  );
};

export default Project;
