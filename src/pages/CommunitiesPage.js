import React from "react";
import CardPrincipal from "../components/Comunities/CardPrincipal";

//styles
import "../assets/styles/CommunitiesPage.css";

const CommunitiesPage = () => {
  return (
    <div className="communities__page">
      <article className="communities__page--title">
        <h1>COMUNIDADES</h1>
      </article>
      <div>
        <input type="search" />
      </div>
      <div className="communities__page--cards-container">
        <CardPrincipal
          imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/englishGroup.jpg?alt=media&token=941fb038-4216-42f0-80f0-5c29ede0fe82"
          imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/english-flag1.png?alt=media&token=826b8bb9-1cd9-4fbe-a12a-2526ec81a6ee"
          name="Basic English"
          goal="Get to B2"
          paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
          start="Inicia el 03 de Octubre"
        />
        <CardPrincipal
          imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-worldspectrum-844124.jpg?alt=media&token=29c9192d-8366-45bc-ad74-beb27b2745e0"
          imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-alesia-kozik-6763964.jpg?alt=media&token=5cb907a4-e0e3-43fb-abef-97fbee9ef93e"
          name="Crypto para desarrolladores"
          goal="Aprender Solidity"
          paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
          start="Inicia el 03 de Octubre"
        />
        <CardPrincipal
          imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-pixabay-209679.jpg?alt=media&token=101e3df1-e47a-4a9d-af64-f053a7353c33"
          imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/976605-appliances-console-controller-dualshock-gamepad-games-videogame_106553.png?alt=media&token=7321721d-50c8-4fac-8d40-869da1a14326"
          name="Videojuegos con responsabilidad"
          goal="Jugar e interactuar con personas más allá de los videojuegos"
          paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
          start="Inicia el 03 de Octubre"
        />
        <CardPrincipal
          imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-worldspectrum-844124.jpg?alt=media&token=29c9192d-8366-45bc-ad74-beb27b2745e0"
          imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-alesia-kozik-6763964.jpg?alt=media&token=5cb907a4-e0e3-43fb-abef-97fbee9ef93e"
          name="Crypto para desarrolladores"
          goal="Aprender Solidity"
          paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
          start="Inicia el 03 de Octubre"
        />
        <CardPrincipal
          imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/englishGroup.jpg?alt=media&token=941fb038-4216-42f0-80f0-5c29ede0fe82"
          imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/english-flag1.png?alt=media&token=826b8bb9-1cd9-4fbe-a12a-2526ec81a6ee"
          name="Basic English"
          goal="Get to B2"
          paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
          start="Inicia el 03 de Octubre"
        />
        <CardPrincipal
          imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-pixabay-209679.jpg?alt=media&token=101e3df1-e47a-4a9d-af64-f053a7353c33"
          imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/976605-appliances-console-controller-dualshock-gamepad-games-videogame_106553.png?alt=media&token=7321721d-50c8-4fac-8d40-869da1a14326"
          name="Videojuegos con responsabilidad"
          goal="Jugar e interactuar con personas más allá de los videojuegos"
          paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
          start="Inicia el 03 de Octubre"
        />
      </div>
    </div>
  );
};

export default CommunitiesPage;
