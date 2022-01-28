import React from 'react';
import classes from "./Container.module.css"

const Container = (props) => {
    const { title, imageSrc, volume } = props.nfts;
    return( 
    <>
    <div className={classes["nft-items"]}>
                    <div className={classes["nft-container"]}>
                        <div className={classes["nft-item"]} >
                            <img className={classes.img} src={imageSrc} alt='img'/>
                            <h1 className={classes.volume}>{volume}</h1>
                        </div>
                        <h1 className={classes["nft-name"]}>{title}</h1>
                    </div>
                </div>
    </>
  )
};

export default Container;
