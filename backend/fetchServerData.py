import requests
import json
from config import MONGO_URL_GET,API_KEY

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
    'api-key': API_KEY
}

response = requests.request("POST", MONGO_URL_GET, headers=headers, data=payload)

print(response.json())