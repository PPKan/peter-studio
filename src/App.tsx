import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import bigTree from "./images/big-tree.svg";
import { useEffect, useState } from "react";
import Language from "./components/Language/Language";
import { loading } from './functions/loading';



function App() {

  loading(0);

  return (
    <main className="about">
      <Navbar />
      <Language />
      <img className="about__tree" src={bigTree} alt="big tree for entrance" />
      <div className="about__text">
        <p className="about__text--title">Art, Language, Technology</p>
        <p className="about__text--description">
          The bridge between human and digits.
        </p>
      </div>
    </main>
  );
}

export default App;
