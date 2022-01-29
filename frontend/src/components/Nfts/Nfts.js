import React, { useEffect, useState } from 'react';
import classes from "./Nfts.module.css"
import Container from "./Container"



const Nfts = () => {

    const [nfts,setNfts] = useState([])
    useEffect(()=>{

          fetch("https://api-dev-junction.herokuapp.com/api/hackathon")
          .then(response => response.json())
          .then(result => {
              const data = result.data.document.data.collections.edges             
              data.forEach(collections => {
                const collection = {
                    name:collections.node.name,
                    logo:collections.node.logo,
                    volume:collections.node.statsV2.oneDayVolume.eth
                }
                setNfts(prev=>[...prev,collection])
            });
          })
          .catch(error => console.log('error', error));
    },[])
  return( 
  <>
    <div className={classes["nfts-section"]} id='nfts'>
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
