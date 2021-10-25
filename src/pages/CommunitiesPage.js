import React, { useState, useEffect } from "react";
import CardPrincipal from "../components/Comunities/CardPrincipal";

//styles
import "../assets/styles/CommunitiesPage.css";

const CommunitiesPage = () => {
  const [communities, setCommunities] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  let allCommunities = [];

  if (!searchValue.length > 1) {
    allCommunities = communities;
  } else {
    allCommunities = Object.values(communities).filter((community) => {
      const communityName = community.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return communityName.includes(searchText);
    });
  }

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

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="communities__page">
      <article className="communities__page--title">
        <h1>COMUNIDADES</h1>
      </article>
      <div className="search__container">
        <input
          onChange={onSearchValueChange}
          placeholder="Busca una comunidad"
          className="search__communities"
          type="search"
          value={searchValue}
        />
      </div>
      <div className="communities__page--cards-container">
        {allCommunities.map((item) => {
          return (
            <CardPrincipal
              id={item.id}
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
