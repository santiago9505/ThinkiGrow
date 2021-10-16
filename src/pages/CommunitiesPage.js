import React, { useState, useEffect } from "react";
import CardPrincipal from "../components/Comunities/CardPrincipal";

//styles
import "../assets/styles/CommunitiesPage.css";

const CommunitiesPage = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      "https://thinkigrow-development-default-rtdb.firebaseio.com/communities.json";
    const data = await fetch(url);
    const projects = await data.json();
    setCommunities(projects);
  };

  console.log(communities);

  return (
    <div className="communities__page">
      <article className="communities__page--title">
        <h1>COMUNIDADES</h1>
      </article>
      <div>
        <input type="search" />
      </div>
      <div className="communities__page--cards-container">
        {communities.map((item) => {
          return (
            <CardPrincipal
              imageUrl={item.image}
              imageLogo={item.logo}
              name={item.name}
              goal={item.goal}
              paragraph={item.description}
              start={item.start}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommunitiesPage;
