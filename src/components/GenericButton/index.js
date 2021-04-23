import React from "react";
import { Button } from "react";
import styles from "./styles.module.css";

const GenericButton = (props, onClick) => {
  return (
    <div className={styles.pressContainer}>
      <button className={styles.buttonstyle} onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default GenericButton;
