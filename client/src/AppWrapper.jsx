import { useState } from "react";
import Context from "./contexts/Context.js";

import App from "./App.jsx";

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

export default AppWrapper;
