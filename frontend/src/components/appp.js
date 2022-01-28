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
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));