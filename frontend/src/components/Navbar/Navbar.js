import React from 'react';
import logo from "../../assets/logo.jpg"
import classes from "./Navbar.module.css"

const Navbar = () => {
  return( 
  <>
    <div className={classes.navbar}>
      <div className={classes["logo-container"]}>
        <img src={logo} className={classes.logo}/>
        <h1 className={classes["logo-name"]}>FALCON-<span className={classes["logo-lname"]}>NFT</span></h1>
      </div>
      <ul className={classes["nav-links"]}>
        <li className={classes["nav-link"]}><a href='#nfts'>NFTs</a></li>
        <li className={classes["nav-link"]}><a href='#creator'>Creators</a></li>
        <li className={classes["nav-link"]}><a href='#about'>About</a></li>
        <li className={classes["nav-link"]}><a href='#form'>Add Nfts</a></li>
      </ul>
    </div>
  </>
  )
};

export default Navbar;
