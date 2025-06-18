const clases = ["Espadachin", "Mago", "Arquero"];
const enemigos = ["Ogro", "Esqueleto", "Duende"];
let personaje = {
    nombre: "",
    clase: "",
    vida: 100,
    fuerza: 0
};

// CREACION DE PERSONAKES 
function crearPersonaje() {
    personaje.nombre = prompt("Ingresa tu nombre:");
    let seleccionClase = prompt("Elegi tu clase:\n1. Espadachin\n2. Mago\n3. Arquero");
    
    switch (seleccionClase) {
        case "1":
            personaje.clase = clases[0];
            personaje.fuerza = 30;
            break;
        case "2":
            personaje.clase = clases[1];
            personaje.fuerza = 20;
            break;
        case "3":
            personaje.clase = clases[2];
            personaje.fuerza = 25;
            break;
        default:
            alert("Clase no existente, te asignaremos un espadachin.");
            personaje.clase = clases[0];
            personaje.fuerza = 30;
    }
    alert(`Bienvenido, ${personaje.nombre} el ${personaje.clase}!\nTu fuerza inicial es: ${personaje.fuerza}`);
}

//SELECCION DEL ENEMIGO
function seleccionarEnemigo() {
    let enemigo = enemigos[Math.floor(Math.random() * enemigos.length)];
    let vidaEnemigo = 100;
    console.log(`\nApareció un ${enemigo} con ${vidaEnemigo} de vida\n`);
    return { nombre: enemigo, vida: vidaEnemigo };
}

//COMBATE
function combatir(enemigo) {
    let turno = 1;
    while (personaje.vida > 0 && enemigo.vida > 0) {
        console.log(`Turno ${turno}`);
        
//ataque del jugador
        enemigo.vida -= personaje.fuerza;
        console.log(`${personaje.nombre} ataca al ${enemigo.nombre}, dejándolo con ${Math.max(0, enemigo.vida)} de vida.`);

//verificar si el enemigo soporto el ataque
        if (enemigo.vida <= 0) {
            alert(`¡Has derrotado al ${enemigo.nombre}!`);
            break;
        }
//atque del enemigo 
        let dañoEnemigo = Math.floor(Math.random() * 20) + 10;
        personaje.vida -= dañoEnemigo;
        console.log(`El ${enemigo.nombre} ataca a ${personaje.nombre}, dejándolo con ${Math.max(0, personaje.vida)} de vida.`);

        if (personaje.vida <= 0) {
            alert(`Fuiste derrotado por el ${enemigo.nombre}!!`);
            break;
        }
        turno++;
    }
}
// función para comenzar el juego
function iniciarJuego() {
    crearPersonaje();
    if (confirm("¿Queres comenzar un combate?")) {
        let enemigo = seleccionarEnemigo();
        combatir(enemigo);
    } else {
        alert("Nos vemos pronto cuando estes listo!");
    }
}


iniciarJuego();

