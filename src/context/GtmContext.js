"use client";
import { createContext, useContext, useState } from "react";

const GtmContext = createContext();

export const GtmProvider = ({ children }) => {
  const [gtmId, setGtmId] = useState(null);

  return (
    <GtmContext.Provider value={{ gtmId, setGtmId }}>
      {children}
    </GtmContext.Provider>
  );
};

export const useGtm = () => {
  console.log("asd");
  const context = useContext(GtmContext);
  if (!context) {
    throw new Error("useGtm must be used within a GtmProvider");
  }
  return context;
};
