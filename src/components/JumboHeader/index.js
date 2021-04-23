import React from "react";
import GenericButton from "../GenericButton";
import styles from "./styles.module.css";

const JumboHeader = () => {
  return (
    <div className={styles.main}>
      <h2>My Projects!</h2>
      <p>These are the projects I am currenlty working on</p>
      <div className= {styles.buttonContainer}>
        <GenericButton text="Github" />
        <GenericButton text="LinkedIn" />
      </div>
    </div>
  );
};

export default JumboHeader;
