from flask import Flask, render_template, request
import os
from calorie_counter import get_calories_from_image

app = Flask(__name__)

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'static', 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/")
def index():
    """
    Route principale pour afficher la page d'accueil.
    """
    return render_template("index.html")

@app.route("/upload", methods=["POST"])
def upload():
    """
    Route pour gérer l'upload d'une image et retourner les calories estimées.
    """
    image = request.files.get("image")

    if not image or image.filename == "":
        return {"error": "No image uploaded"}, 400

    try:
        save_path = os.path.join(UPLOAD_FOLDER, image.filename)
        image.save(save_path)

        calories = get_calories_from_image(save_path)

        return {"calories": calories}

    except Exception as e:
        return {"error": str(e)}, 500

if __name__ == "__main__":
    app.run(debug=True)
