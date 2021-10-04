import React from "react";
import { useMoralis } from "react-moralis";

//styles
import "../assets/styles/Sign.css";

const Sign = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const handleAuth = () => {
    authenticate();
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1>Bienvenido a Thinkigrow</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleAuth}>Ingresa con Metamask</button>
    </div>
  );
};

export default Sign;
