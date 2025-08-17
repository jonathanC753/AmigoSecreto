# 🎁 Amigo Secreto

Este es un proyecto sencillo en **JavaScript, HTML y CSS** que permite organizar un sorteo de "Amigo Secreto".  
Los usuarios pueden añadir nombres a una lista, sortear aleatoriamente un amigo y reiniciar el juego.

---

## 📌 Funcionalidades principales

✅ **Agregar amigos**  
- Los nombres se validan para que no estén vacíos y solo acepten texto.  
- Cada nombre se muestra dinámicamente en la lista.

✅ **Sortear amigo**  
- Selecciona aleatoriamente un nombre de la lista.  
- Después de hacer clic, el botón de "Sortear amigo" queda deshabilitado para evitar múltiples sorteos.  
- Se muestra el resultado en pantalla.

✅ **Reiniciar juego**  
- Vacía la lista de amigos.  
- Limpia el resultado del sorteo.  
- Reactiva el botón de "Sortear amigo".

---

## 🛠️ Tecnologías usadas

- **HTML5** → estructura de la página.  
- **CSS3** → estilos de los botones, lista y estados (`:active`, `:disabled`).  
- **JavaScript** → lógica para manejar la lista, sortear y actualizar la interfaz.

---

## 📂 Estructura del proyecto

📦 AmigoSecreto
┣ 📂 assets
┃ ┣ restart_3594008.png # ícono de reinicio
┃ ┣ play_circle_outline.png # ícono de sortear
┣ index.html # estructura principal
┣ style.css # estilos del proyecto
┣ script.js # lógica en JS
┗ README.md # este archivo
