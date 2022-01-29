import React from 'react';
import classes from "./About.module.css"

const About = () => {
  return (
  <>
    <div className={classes.about} id="about">
        <h1 className={classes["about-heading"]}>Non-fungible tokens (NFTs) are a digital
certificate of ownership of a piece of digital
asset that can be bought and sold.</h1>
        <p className={classes["about-para"]}>This site has listed the top 5 Nfts all over the world!</p>
        <p className={classes["about-para"]}>The data is scrapped from OpenSea and stored in a database.</p>
    </div>
  </>
    )
};

export default About;
