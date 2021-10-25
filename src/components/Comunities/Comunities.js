import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardSecondary from "./CardSecondary";
import CardPrincipal from "./CardPrincipal";

//styles
import "../../assets/styles/Comunities.css";

const Comunities = () => {
  const [principal, setPrincipal] = useState([]);
  const [secondary, setSecondary] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://thinkigrow-development-default-rtdb.firebaseio.com/communities.json";
      const data = await fetch(url);
      const projects = await data.json();
      gettingPrincipalAndSecondary(projects);
    };
    getData();
  }, []);

  const gettingPrincipalAndSecondary = (projects) => {
    let allSecondary = [];
    console.log(Object.values(projects).length);

    for (let i = 0; i < Object.values(projects).length; i++) {
      if (Object.values(projects)[i].secondary) {
        allSecondary.push(Object.values(projects)[i]);
      } else if (Object.values(projects)[i].principal) {
        setPrincipal(Object.values(projects)[i]);
      } else {
        continue;
      }
    }
    setSecondary(allSecondary);
  };

  return (
    <div className="comunities">
      <article className="comunities__title">
        <h1>COMUNIDADES</h1>
      </article>
      <div className="comunities-container">
        <div className="comunities__secondary--container">
          {secondary.map((item) => {
            return (
              <CardSecondary
                id={item.id}
                imageUrl={item.image}
                imageLogo={item.logo}
                name={item.name}
                paragraph={item.description}
              />
            );
          })}
        </div>
        <div className="comunities__principal--container">
          <CardPrincipal
            id={principal.id}
            imageUrl={principal.image}
            imageLogo={principal.logo}
            name={principal.name}
            goal={principal.goal}
            paragraph={principal.description}
            start={principal.start}
          />
        </div>
      </div>
      <div className="button__comunities--container">
        <Link to="/communities">
          <button>VER COMUNIDADES</button>
        </Link>
      </div>
    </div>
  );
};

export default Comunities;
