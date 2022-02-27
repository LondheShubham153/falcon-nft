import React from 'react';
import classes from "./Creators.module.css"

const Creators = () => {
  
  return (
  <>
  <h1 className={classes["creator-heading"]} id='creator'>Creators</h1>
  <div className={classes["creators-section"]}>
    <div className={classes.creator}>
      <img src="https://avatars.githubusercontent.com/u/23608523?v=4" className={classes.image} />
      <a href='https://github.com/LondheShubham153' className={classes["creator-name"]}>Shubham Londhe</a>
    </div>
    <div className={classes.creator}>
      <img src="https://avatars.githubusercontent.com/u/89961974?v=4" className={classes.image} />
      <a href='https://github.com/Spyware007' className={classes["creator-name"]}>Om Gawande</a>
    </div>
    <div className={classes.creator}>
      <img src="https://avatars.githubusercontent.com/u/64722289?v=4" className={classes.image} />
      <a href='https://github.com/sinha-toyeesh'className={classes["creator-name"]}>Toyeesh Sinha</a>
    </div>
    {/* <div className={classes.creator}>
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
    </div> */}
  </div>
  </>
    )
};

export default Creators;
