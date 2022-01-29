import React from 'react';
import classes from "./Creators.module.css"

const Creators = () => {
  return (
  <>
  <h1 className={classes["creator-heading"]} id='creator'>Creators</h1>
  <div className={classes["creators-section"]}>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
    <div className={classes.creator}>
      <img src={require("../../assets/logo.jpg")} className={classes.image} />
      <a className={classes["creator-name"]}>Abcdef</a>
    </div>
  </div>
  </>
    )
};

export default Creators;
