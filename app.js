// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let msgError = document.getElementById("error");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (nombreAmigo === "") {
        msgError.innerHTML = `!!!el nombre no puede estar vacio¡¡¡`;
        limpiarCampo()
        return false;
    } if (!regex.test(nombreAmigo)) { // valida que solo contenga letras y espacios
        msgError.innerHTML = `!!!el nombre ${nombreAmigo} no es valido¡¡¡`;
        limpiarCampo()
        return false;
    } if (listaAmigos.includes(nombreAmigo)) {
        msgError.innerHTML = `!!!el nombre ${nombreAmigo} YA EXISTE¡¡¡`;
        limpiarCampo()
    }else {
        listaAmigos.push(nombreAmigo);
        displayArray();
        msgError.innerHTML = ""; // elimina mensaje de error cuando el dato es correcto
        limpiarCampo();
    }
}

function displayArray() {
    const list = document.getElementById("listaAmigos");//seleccionamos la lista html por id
    list.innerHTML = ""; // Limpiar la lista antes de actualizar
    for (let i = 0; i < listaAmigos.length; i++) { //for con el tamaño de la lista global
        const listItem = document.createElement("li"); //crea la lista con elementos html de manera dinamica
        listItem.textContent = listaAmigos[i]; //asigna el valor  i a listItem
        list.appendChild(listItem); //agrega el valor de listAmigo a una possicion listItem.
    }
}

function limpiarCampo() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let selctRandList = Math.floor(Math.random() * listaAmigos.length);
    document.getElementById("resultado").innerHTML = listaAmigos[selctRandList].toString();
}

