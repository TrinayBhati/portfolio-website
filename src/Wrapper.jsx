import React from "react";
import Navigation from "./navigation/Navigation";

const Wrapper = ({ children }) => {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
};

export default Wrapper;
