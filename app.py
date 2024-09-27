from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Permite que o frontend acesse o backend

@app.route('/pokemon/<name>', methods=['GET'])
def get_pokemon(name):
    poke_api_url = f"https://pokeapi.co/api/v2/pokemon/{name.lower()}"
    response = requests.get(poke_api_url)

    if response.status_code == 200:
        pokemon_data = response.json()
        result = {
            "name": pokemon_data['name'],
            "id": pokemon_data['id'],
            "types": [t['type']['name'] for t in pokemon_data['types']],
            "abilities": [a['ability']['name'] for a in pokemon_data['abilities']],
            "sprite": pokemon_data['sprites']['front_default']
        }
        return jsonify(result)
    else:
        return jsonify({"error": "Pokemon not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)  # Em produção, o Gunicorn gerencia o servidor
