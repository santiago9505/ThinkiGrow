import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CardSecondary from "./CardSecondary";
import CardPrincipal from "./CardPrincipal";

//styles
import "../../assets/styles/Comunities.css";

const Comunities = () => {
  const [principal, setPrincipal] = useState([]);
  const [secondary, setSecondary] = useState([]);
  const [third, setThird] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      "https://thinkigrow-development-default-rtdb.firebaseio.com/communities.json";
    const data = await fetch(url);
    const projects = await data.json();
    gettingPrincipalAndSecondary(projects);
  };

  const gettingPrincipalAndSecondary = (projects) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].third) {
        setThird(projects[i]);
      } else if (projects[i].secondary) {
        setSecondary(projects[i]);
      } else if (projects[i].principal) {
        setPrincipal(projects[i]);
      } else {
        continue;
      }
    }
  };

  console.log(third);

  return (
    <div className="comunities">
      <article className="comunities__title">
        <h1>COMUNIDADES</h1>
      </article>
      <div className="comunities-container">
        <div className="comunities__secondary--container">
          <CardSecondary
            id={secondary.id}
            imageUrl={secondary.image}
            imageLogo={secondary.logo}
            name={secondary.name}
            paragraph={secondary.description}
          />
          <CardSecondary
            id={third.id}
            imageUrl={third.image}
            imageLogo={third.logo}
            name={third.name}
            paragraph={third.description}
          />
        </div>
        <div className="comunities__principal--container">
          <CardPrincipal
            id={principal.id}
            imageUrl={principal.image}
            imageLogo={principal.logo}
            name={principal.name}
            goal="get to b2"
            paragraph={principal.description}
            start={principal.start}
          />
        </div>
      </div>
      <div className="button__comunities--container">
        <Link to="/communities">
          <button>
            VER MÁS
            <img
              className="arrow"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Arrow%201.svg?alt=media&token=64b286b9-6edf-49ca-97b8-7c7adebe6afc"
              alt="flecha"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Comunities;
