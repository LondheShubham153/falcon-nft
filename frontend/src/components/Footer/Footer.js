import React from 'react';
import logo from "../../assets/logo.jpg"
import classes from "./Footer.module.css"

const Footer = () => {
  return (
  <>
  <div className={classes.footer}>
      <div className={classes["logo-container"]}>
        <img src={logo} className={classes.logo}/>
        <h1 className={classes["logo-name"]}>NFT-<span className={classes["logo-lname"]}>JOY</span></h1>
      </div>
      <div>
      <ul className={classes["nav-links"]}>
      <li className={classes["nav-link"]}><a href='#creator'>Creators</a></li>
        <li className={classes["nav-link"]}><a href='#about'>About</a></li>
      </ul>
      </div>
      <div>
          <h1 className={classes.love}>Made with ❤️‍🔥 by Falcons</h1>
      </div>
  </div>
  </>
  )
};

export default Footer;
