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
    
];
const api_url = "https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne"
const options = {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Access-Control-Request-Headers": "*",
        "api-key": "lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH",
        "Content-Type": "application/json"
    },
    body:
        JSON.stringify({
            
                "collection": "AssetsData",
                "database": "Data-NFT",
                "dataSource": "AssetCollection",
                "projection": {
                    "data": 1
                }
            
        })
  }
const Nfts = () => {
    const getData = async () => {
//         var axios = require('axios');
// var data = JSON.stringify({
//   "dataSource": "AssetCollection",
//   "database": "Data-NFT",
//   "collection": "AssetsData",
//   "projection": {
//     "data": 1
//   }
// });

// var config = {
//   method: 'post',
//   mode: "no-cors",
//   url: 'https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne',
//   headers: { 
//     'Access-Control-Request-Headers': '*', 
//     'Access-Control-Allow-Origin': 'true', 
//     'Content-Type': 'application/json', 
//     'api-key': 'lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

//         var myHeaders = new Headers();
// myHeaders.append("Access-Control-Request-Headers", "*");
// myHeaders.append("Access-Control-Allow-Origin", "true");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("api-key", "lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH");

// var raw = JSON.stringify({
//   "dataSource": "AssetCollection",
//   "database": "Data-NFT",
//   "collection": "AssetsData",
//   "projection": {
//     "data": 1
//   }
// });

// var requestOptions = {
//   method: 'POST',
//   mode: "no-cors",
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//         try {
//             const response = await fetch("https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne", {
//               method: "POST",
//               mode: "no-cors",
//               headers:{
//                   'api-key': "lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH",
//                 'Content-Type': 'application/json',
//                 'Access-Control-Request-Headers': '*',
//                       'Access-Control-Allow-Origin': 'true'

//             },
//               body:JSON.stringify({
//                 "dataSource": "AssetCollection",
//                 "database": "Data-NFT",
//                 "collection": "AssetsData",
//                 "projection": {
//                   "data": 1
//                 } 
//               })})
//             const responseData = await response.json()
//             console.log(responseData);
//           } catch (error) {
//             console.log(error);
//           }
        fetch(api_url,options )
            .then(resp => resp.json())
            .then((data)=> {
              console.log(data);
            })
            .catch(e=>{
                console.log(e);
            })
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
