import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import bigTree from "./images/big-tree.svg";
import { useEffect, useState } from "react";
import Language from "./components/Language/Language";

function App() {
  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   setLoader(false);
  // });

  // if (!loader) {
  //   const loaderDiv: Element | null = document.querySelector(".loader");
  //   loaderDiv?.remove();
  // }

  return (
    <main className="about">
      <Navbar />
      <Language/>
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
