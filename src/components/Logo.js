import React from "react";
import { Link } from "react-router-dom";

//styles
import "../assets/styles/Header.css";

const Logo = () => {
  return (
    <Link to="/" className="logo__container">
      <h1>ThinkiGrow</h1>
      <img
        className="icon"
        src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20200%20(1).svg?alt=media&token=a148dfec-1aae-45e6-945a-c64dc865b055"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
