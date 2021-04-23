import React from "react";
import styles from "./styles.module.css";

const TopBar = (props, onClick) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.yourNameContainer}>
        <h1>{props.firstName}</h1>
        <h1>
          <span className={styles.initial}> {props.lastInitial} </span>
        </h1>
      </div>
      <div className={styles.homeBar}>
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Projects</h5>
          <h5>Blog</h5>

      </div>
    </div>
  );
};

export default TopBar;
