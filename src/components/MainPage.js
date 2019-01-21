import React from "react";
import ModsContainer from "../containers/ModsContainer";

const MainPage = props => {
  return (
    <div>
      {" "}
      <h1 id="welcome">
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
        <span>!</span>
      </h1>
      <ModsContainer />
    </div>
  );
};

export default MainPage;
