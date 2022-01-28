import React, { useEffect } from 'react';
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
    
]
const api_url = "https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne"
// const options = {
//     method: "POST",
//     mode: "no-cors",
//     headers: {
//         "Access-Control-Request-Headers": "*",
//         "api-key": "lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH",
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin': 'true'
//     },
//     body:
//         JSON.stringify({
//             "dataSource": "AssetCollection",
//             "database": "Data-NFT",
//             "collection": "AssetsData",
//             "projection": {
//               "data": 1
//             }
//           })
//   }
  var myHeaders = new Headers();
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append("Access-Control-Allow-Origin", "true");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("api-key", "lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH");

var raw = JSON.stringify({
  "dataSource": "AssetCollection",
  "database": "Data-NFT",
  "collection": "AssetsData",
  "projection": {
    "data": 1
  }
});

var requestOptions = {
  method: 'POST',
  mode: 'no-cors',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
const Nfts = () => {
    const getData =  () => {

        fetch(api_url,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        getData()

    })
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
