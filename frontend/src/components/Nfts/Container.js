import React from 'react';
import classes from "./Container.module.css"
import Tilt from 'react-parallax-tilt';

const Container = (props) => {
    const { title, imageSrc, volume } = props.nfts;
    return( 
    <>
    <div className={classes["nft-items"]}>
        <div className={classes["nft-container"]}>
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
            <div className={classes["nft-item"]} >
                <img className={classes.img} src={imageSrc} alt='img'/>
                <h1 className={classes.volume}>{volume}</h1>
            </div>
            </Tilt>
            <h1 className={classes["nft-name"]}>{title}</h1>
        </div>
    </div>
    </>
  )
};

export default Container;
