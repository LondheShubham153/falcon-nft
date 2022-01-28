import React from 'react';
import classes from "./Holders.module.css"

const Holders = (props) => {
  return( 
  <>
    <div className={classes["holders-section"]}>
        <div className={classes.heading}>
            <span>Top Nft Holders</span>
        </div>
    </div>
  </>
  )
};

export default Holders;
