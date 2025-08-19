// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde guardaremos los nombres
let amigos = [];

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre valido.");
        return;

    }

    // Agregamos el nombre al arreglo
    amigos.push(nombre);

    // Mostramos la lista actualizada
    mostrarLista();

    // Limpiamos el input
    input.value = "";
    input.focus();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista anterior

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");

        // Texto con el nombre
        li.textContent = nombre + " ";

        // Boton de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);

        lista.appendChild(li);

    });

}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
    alert("Agrega un nombre al menos antes de sortear.");
    return;
    }    

// Selecciona un indice aleatorio
const indice = Math.floor(Math.random() * amigos.length);
const ganador = amigos[indice];

// Mostrar el resultado 
const resultado = document.getElementById("resultado");
resultado.innerHTML = `<li> El Amigo secreto es: <strong>${ganador}</strong></li>`;

amigos.splice(indice, 1);
mostrarLista();

}

function reiniciarJuego() {
    amigos = [];
    mostrarLista();
    document.getElementById("resultado").innerHTML = "";
}


const inputAmigo = document.getElementById("amigo");

inputAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});