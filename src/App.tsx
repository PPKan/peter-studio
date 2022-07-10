import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import bigTree from "./images/big-tree.svg";
import { useEffect, useState } from "react";
import Language from "./components/Language/Language";
import { loading } from './functions/loading';



function App() {

  loading(0);

  return (
    <main className="main">
      <Navbar />
      <Language />
      <img className="main__tree" src={bigTree} alt="big tree for entrance" />
      <div className="main__text">
        <p className="main__text--title">Art, Language, Technology</p>
        <p className="main__text--description">
          Construct the bridge between human and digits.
        </p>
      </div>
    </main>
  );
}

export default App;
