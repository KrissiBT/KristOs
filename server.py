#import required libraries for flask server
from flask import Flask, request, jsonify
import json

app = Flask(__name__)

secret = "secret"

#listen to path /bio
@app.route('/bio', methods=['POST'])
def bio():
    #get the data from the request
    data = request.get_json()
    
    

    #check if the secret is correct
    
    if data['secret'] == secret:
        #return the data
        #pretty print the data
        print(json.dumps(data, indent=4, sort_keys=True))
        #save the data to a file
        with open('data.json', 'w') as outfile:
            json.dump(data, outfile)
        return jsonify({"Nice!": "Cool secret"})
        
        

    else:
        #return error
        print("Invalid secret")
        return jsonify({"error": "Invalid secret"})

#listen to path /data
@app.route('/data', methods=['GET'])
def data():
    #return the data
    with open('data.json') as json_file:
        data = json.load(json_file)
        return jsonify(data)
    

#start the server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1337, debug=False)