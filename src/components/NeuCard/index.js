import React from "react";
import styles from "./styles.module.css";

const NeuCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              {/* <h2>GR.</h2> */}
              <h3>Card One</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.";
              </p>
              <a> read more </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              {/* <h2>GR.</h2> */}
              <h3>Card Two</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.";
              </p>
              <a> read more </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              {/* <h2>03</h2> */}
              <h3>Card Three</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.";
              </p>
              <a> read more </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuCard;
