import React, { useEffect, useState } from "react";
import app from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [join, setJoin] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, join, setJoin }}>
      {children}
    </AuthContext.Provider>
  );
};
