let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    if (!isNaN(nombre)) {
        alert("El nombre no puede ser un número.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    amigos.push(nombre);

    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = ""; // Limpiar campo
    input.focus();    // Volver a enfocar
}

function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    let valido = false;
    let sorteados = [];

    while (!valido) {
        sorteados = [...amigos];
        mezclar(sorteados);
        valido = true;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteados[i]) {
                valido = false;
                break;
            }
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigos[i]} le regala a ${sorteados[i]}`;
        resultado.appendChild(li);
    }
}