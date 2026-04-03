# 🎂 TBakery

Landing page para una panadería artesanal, con formulario de contacto funcional y envío de correos. Construida con Flask en el backend y HTML/CSS/JS vanilla en el frontend.

---

## 🖼️ Vista previa

Hero section con imagen de fondo, sección de productos, FAQ interactivo y formulario de contacto.

---

## 🛠️ Tecnologías

| Capa         | Tecnología                                      |
|--------------|-------------------------------------------------|
| Frontend     | HTML5, CSS3, JavaScript (vanilla), Tailwind CSS |
| Backend      | Python, Flask                                   |
| Email        | Flask-Mail (SMTP Gmail)                         |
| Configuración| python-dotenv                                   |

---

## ✨ Funcionalidades

- 🍰 Sección de productos con cards
- 📬 Formulario de contacto con envío real de correo vía Gmail SMTP
- ✅ Validación en frontend y backend
- 📱 Diseño responsive (mobile-friendly)
- ❓ FAQ interactivo con animaciones CSS
- 🔔 Notificaciones flash en tiempo real (sin recargar la página)
- 🌙 Navbar con efecto scroll

---

## 📁 Estructura del proyecto

```
proyecto-landing/
├── static/
│   ├── css/
│   │   ├── input.css
│   │   ├── styles.css
│   │   └── tailwind.css
│   ├── img/
│   │   └── faicon.png
│   └── js/
│       └── script.js
├── templates/
│   └── index.html
├── app.py
├── package.json
├── package-lock.json
├── tailwind.config.js
├── .env               ← no se sube a GitHub
├── .gitignore
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Agregar base de datos para guardar mensajes
- [ ] Sección "Sobre nosotros"
- [ ] Botones con links de redes sociales
- [ ] Galería de productos ampliada
- [ ] Protección CSRF en formularios
- [ ] Panel de administración para ver mensajes recibidos

---

## 👩‍💻 Autora

Hecho con ☕ y mucha azúcar por **Mariana Sánchez**  
[GitHub](https://github.com/marianaSEAdon/proyecto-landing) 
[LinkedIn](https://www.linkedin.com/in/software-programmation/)
