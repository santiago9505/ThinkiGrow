import React, { useEffect, useState } from "react";
import app from "../firebase";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [join, setJoin] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <Context.Provider value={{ currentUser, join, setJoin }}>
      {children}
    </Context.Provider>
  );
};
