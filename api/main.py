import datetime
import json
from flask import Flask, render_template, jsonify, request, session
from google.cloud import firestore
import string
import random
import time

def isIterable(data):
    try:
        _ = (e for e in data)
    except TypeError:
        print("Empty Request Body")
        return False
    else:
        return True


db = firestore.Client()
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False



@app.route("/api/v1/clock/",methods=["GET"])
def GetClock():
    doc = db.collection(u"Clocks")
    clocks = []
    for g in doc.stream():
        clocks.append(g.to_dict())
    return jsonify(clocks)



@app.route("/api/v1/clock/",methods=["POST"])
def addOneClock():
    data = request.json
    if isIterable(data):
            data["timestamp"]=time.time()
            db.collection(u'Clocks').document().set(data)
            return '',200
    return '',500





if __name__ == "__main__":
    app.run(host="0.0.0.0", port=12345, debug=True)