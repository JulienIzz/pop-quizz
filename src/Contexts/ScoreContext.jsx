import React, { useState } from "react";

export const ScoreContext = React.createContext();

export const ScoreContextComp = ({ children }) => {
  const [userScore, setUserScore] = useState(0);
  return (
    <ThemeContext.Provider value={{ userScore, setUserScore }}>
      {children}
    </ThemeContext.Provider>
  );
};

// NON FONCTIONNEL POUR LE MOMENT
