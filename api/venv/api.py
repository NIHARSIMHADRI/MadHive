from flask import Flask

app = Flask(__name__)
accuracy = 5

@app.route('/api/ml')
def predict():
    return {"accuracy": accuracy}