from unittest import result
from flask import Flask,jsonify
from datetime import datetime
from flask import request
import json
import requests
from config import MONGO_URL_GET,MONGO_URL_POST,NFT_IMG,API_KEY

app = Flask(__name__)

@app.route('/healthcheck')
def healthcheck():
    the_time = datetime.now().strftime("%A, %d %b %Y %l:%M %p")

    return """
    <h1>Falcon NFT backend Is Up and Running</h1>
    <p>It is currently {time}.</p>

    <img src={nft_img}/>
    """.format(time=the_time,nft_img=NFT_IMG)


@app.route('/nft/<collection_id>', methods = ['GET', 'POST', 'DELETE'])
def nft(collection_id):
    if request.method == 'GET': 
        result = []

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
        if collection_id:
            MONGO_URL_ONE = f"MONGO_URL/collection_id={collection_id}"

        response = requests.request("POST", MONGO_URL_GET, headers=headers, data=payload)
        full_data = response.json()['document']['data']['collections']['edges']
        for data in full_data:
            final_res = {
                "id":data['node']['id'],
                "logo": data['node']['logo'],
                "name": data['node']['name'],
                "slug": data['node']['slug'],
                "one_day_volume":data['node']['statsV2']['oneDayVolume'],
                "seven_day_volume":data['node']['statsV2']['sevenDayVolume']
            }
            result.append(final_res)
        return jsonify({"data":result,"status":200})

    if request.method == 'POST':
        content = request.json
        try:
            payload = json.dumps({
                "collection": "AssetsData",
                "database": "Data-NFT",
                "dataSource": "AssetCollection",
                "projection": {
                    "data": {
                        "name":content['nft_name'],
                        "logo":content['nft_logo']
                    }
                }
            })
            headers = {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': API_KEY
            }

            response = requests.request("POST", MONGO_URL_POST, headers=headers, data=payload)
            return jsonify({"result":"Uploaded Successfully", "status":200})
        except:
            return jsonify({"result":"Couldn't Upload","status":400})
        
    if request.method == 'DELETE':
        return "TODO DELETE"

    if request.method == 'PUT':
        return "TODO PUT"
    else:
        return "Error 405 Method Not Allowed"
       
       
if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

