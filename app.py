from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text = data.get('text')
    from_lang = data.get('from')
    to_lang = data.get('to')

    url = f"https://api.mymemory.translated.net/get?q={text}&langpair={from_lang}|{to_lang}"
    response = requests.get(url)
    result = response.json()

    translated = result["responseData"]["translatedText"]
    return jsonify({"translated": translated})

if __name__ == '__main__':
    app.run(debug=True)
