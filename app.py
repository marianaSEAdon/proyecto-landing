from flask import Flask, render_template,  request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
import re

load_dotenv()

app = Flask(__name__)

app.secret_key = os.getenv('FLASK_SECRET_KEY', '123')

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    try: 
        nombre = request.form['name']
        correo = request.form['email']
        telefono = request.form['tel']
        mensaje = request.form['ms']
        politica = request.form.get('concern')

        if not nombre or not correo or not telefono or not mensaje:
            return jsonify({"status": "error", "message": "Todos los campos son requeridos"})
        
        if len(nombre) < 2 or len(nombre) > 50:
            return jsonify({"status": "error", "message": "El nombre debe tener entre 2 a 50 letras"})
        
        if not re.match(r"[^@]+@[^@]+\.[^@]+", correo):
            return jsonify({"status": "error", "message": "El correo es invalido"})
        
        if len(mensaje) > 1000:
            return jsonify({"status": "error", "message": "El mensaje es demasiado largo"})

        if politica != 'on':
            return jsonify({"status": "error", "message": "Debes aceptar la política de privacidad y términos de uso para continuar."})

        msg = Message('Nuevo mensaje de contacto',
                      sender=app.config['MAIL_USERNAME'],
                      recipients=[app.config['MAIL_USERNAME']])
        msg.body = f"Nombre: {nombre}\nCorreo: {correo}\nTeléfono: {telefono}\nMensaje: {mensaje}\nAceptó política: {politica}"

        #enviar mensaje
        mail.send(msg)
        return jsonify({"status": "success", "message": "Mensaje enviado correctamente."})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": "Error al enviar el mensaje"})

if __name__ == "__main__":
    app.run(debug=True)

