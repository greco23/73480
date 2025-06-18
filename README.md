Buenos dias, a continuación voy a explicar un poco el pqueño simulador que desarollé

Primero definí clases de personajes, monstruos, y la informacion basica inicial del usuario
Despues cree una funcion que permita al usuario mediante un prompt elegir su clase, y si no ingresa un valor valido, asignarle un por defecto.
Programe una funcion para que elija un monstruo al azar y le asigne una vida del 70 al 100
Posterior a aeso tenemos la funcion principal de combate, primero el jugador va a realizar un ataque basado en su fuerza, se va a chequear la vida del enemigo para ver si es menor o igual a 0 y en caso afirmativo se acabará el juego avisando nuestra victoria. De no sera asi el enemigo nos atacara con un valor de entre 10 a 30, si nuestra vida baja a 0 tras ese golpe se nos informará la derrota, caso contrario se añade una unidad al contador de turnos y se repite el ciclo hsata que se cumpla una de las condiciones
Abajo de eso declare la funcion parar comenzar la simulacion, primero creando el  personaje y luego preguntando al usuario si desea comenzar una batalla
Por ultimo se ejecuta la funcion llamadola para comenzar todo
