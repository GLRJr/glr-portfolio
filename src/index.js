import React from "react";
import ReactDOM from "react-dom";
import IntroCard from "./components/IntroCard";
import CardComponent from "./components/CardComponent";
import TopBar from "./components/TopBar";
import styles from "./styles.module.css";
import NeuCard from "./components/NeuCard";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <TopBar firstName="Gary " lastInitial=" R." />

      <div className={styles.header}>
        <IntroCard />
      </div>

      <div className={styles.body}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div>
      <NeuCard />

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
