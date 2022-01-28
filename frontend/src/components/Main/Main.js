import React from 'react';
import Mlogo from "../../assets/Mlogo.svg"
import classes from "./Main.module.css"
import Tilt from 'react-parallax-tilt';

const Main = () => {
  return (
    <>
    <div className={classes.main}>
      <div className={classes["main-info"]}>
        <h1 className={classes["main-heading"]}>Next Biggest Expedition in <br/> the World <br/> of Cryptocurrency</h1>
        <p className={classes["main-para"]}>Non-fungible tokens (NFTs) are a digital <br/> certificate of ownership of a piece of digital <br/> asset that can be bought and sold.</p>
        <a href='#nfts' className={classes["main-button"]}><span className={classes.span}></span> Explore </a>
      </div>
      <Tilt
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          glareColor="#fff"
          glareEnable={true}
          glareMaxOpacity={0.7}
          glareBorderRadius="20px"
          glarePosition="all"
      >
      <div className={classes["main-image-container"]}>
        <Tilt
        trackOnWindow={true}
        >
        <img src={Mlogo} className={classes["main-image"]} />
        </Tilt>
      </div>
    </Tilt>
    </div>
    </>
  )
};

export default Main;
