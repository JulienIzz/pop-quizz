import React, { useState } from "react";

export const ScoreContext = React.createContext();

export const ScoreContextComp = ({ children }) => {
  const [userScore, setUserScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ userScore, setUserScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// NON FONCTIONNEL POUR LE MOMENT
