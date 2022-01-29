import requests
import json
url = "https://data.mongodb-api.com/app/data-dazjk/endpoint/data/beta/action/findOne"

payload = json.dumps({
    "collection": "AssetsData",
    "database": "Data-NFT",
    "dataSource": "AssetCollection",
    "projection": {
        "data": 1
    }
})
headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': 'lQ9bZ2xGOiHUpILGVcTzEFhpUr8d1CJCTCCNiMH3u7aeaEmQ0xLTVPpjCcX5mIjH'
}

response = requests.request("POST", url, headers=headers, data=payload)


out_file = open('outputFile.txt', 'w')

out_file.write(str(response))

out_file.close()