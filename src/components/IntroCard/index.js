import React from "react";
import GenericButton from "../GenericButton";
import styles from "./styles.module.css";

let title = "Software Engineer";
let body = "I am a Los Angeles-based programmer with a passion for technology";

const IntroCard = (props, onClick) => {
  return (
    <div className={styles.main}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h1>{title}</h1>
        </div>

        <div className={styles.cardDescription}>
          <p>{body}</p>
        </div>

        <div className={styles.btn}>
          <GenericButton
            text="Contact Me"
            onClick={console.log("IntroCard contact clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
