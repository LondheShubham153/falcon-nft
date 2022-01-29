import React from 'react';
import classes from "./Form.module.css"

const Form = () => {
  return (
  <>
    <div className={classes.form} id='form'>
        <h1 className={classes["form-heading"]}>Add Nfts</h1>
        <input className={classes["form-input"]} type="text" placeholder="Type NFT name" /> 
        <input className={classes["form-input"]} type="text" placeholder="Type NFT's link" /> 
        <button className={classes["form-button"]}>Submit</button>
    </div>
  </>
    )
};

export default Form;
