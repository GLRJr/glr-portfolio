import React from "react";
import placeholder from "../../assets/318x180.svg";
import styles from "./styles.module.css";

let image = placeholder;
let title = "Card Title";
let body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const CardComponent = (props, onClick) => {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h1>{title}</h1>
        </div>

        <div className={styles.cardDescription}>
          <p>{body}</p>
        </div>

        <div className={styles.btn}>
          <button onClick={console.log('clicked')}>
            <a>See Full Project</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
