import React from "react";

//styles
import "../assets/styles/ProjectCard.css";

const ProjectCard = ({
  activityName,
  activityDate,
  activityLocation,
  activityStart,
  activityEnd,
  activityDescription,
}) => {
  return (
    <div className="schedule__card">
      <article>
        <h2>{activityName}</h2>
      </article>
      <article className="project__card--info">
        <article className="project__card--item">
          <h3 className="item__info">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Frame%2019.svg?alt=media&token=b124f86c-7165-4b21-924f-3f2257a462a7"
              alt="calendar"
            />{" "}
            Fecha
          </h3>
          <p>{activityDate}</p>
          <p>Modalidad</p>
          <p>Virtual</p>
        </article>
        <article className="project__card--item">
          <h3 className="item__info">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20241.svg?alt=media&token=2b0c2584-8905-443e-bcca-cc2cc30048e8"
              alt="hora"
            />{" "}
            Hora
          </h3>
          <p>06:00 p.m.</p>
          <p>08:00 p.m.</p>
        </article>
        <article className="project__card--item">
          <h3 className="item__info">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20244.svg?alt=media&token=e8eb9de4-4b43-43df-9ee3-1dcd9eb72070"
              alt="actividad"
            />{" "}
            Actividad
          </h3>
          <p>hacer ejercicio de listening con podcast de charla TED</p>
        </article>
      </article>
    </div>
  );
};

export default ProjectCard;
