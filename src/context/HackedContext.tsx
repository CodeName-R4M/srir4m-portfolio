import React, { createContext, useContext, useState, ReactNode } from "react";

interface HackedContextType {
  isHacked: boolean;
  setIsHacked: (value: boolean) => void;
}

const HackedContext = createContext<HackedContextType | undefined>(undefined);

export const HackedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHacked, setIsHacked] = useState(false);

  return (
    <HackedContext.Provider value={{ isHacked, setIsHacked }}>
      {children}
    </HackedContext.Provider>
  );
};

export const useHacked = () => {
  const context = useContext(HackedContext);
  if (context === undefined) {
    throw new Error("useHacked must be used within a HackedProvider");
  }
  return context;
};
