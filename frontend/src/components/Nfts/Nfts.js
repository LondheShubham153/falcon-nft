import React from 'react';
import classes from "./Nfts.module.css"
import Container from "./Container"

const nfts = [
    {
        title: 'Nfts',
        // imageSrc: imageNfts,
        volume: "a"
    },
    {
        title: 'Nfts',
        // imageSrc: imageNfts,
        volume: "a"
    },
    {
        title: 'Nfts',
        // imageSrc: imageNfts,
        volume: "a"
    },
    {
        title: 'Nfts',
        // imageSrc: imageNfts,
        volume: "a"
    },
    {
        title: 'Nfts',
        // imageSrc: imageNfts,
        volume: "a"
    },
    {
        title: 'Nfts',
        // imageSrc: imageNfts,
        volume: "a"
    }
    
];
const Nfts = () => {
    
  return( 
  <>
    <div className={classes["nfts-section"]}>
        <div className={classes.heading}>
            <span>Top Nfts</span>
        </div>
        <div className={classes.nfts}>
            {nfts.map((nfts, index) => {
                return <Container nfts={nfts} key={index} />;
            })}
        </div>
    </div>
  </>
  )
};

export default Nfts;
