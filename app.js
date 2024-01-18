
let numeroSecreto = 0;
let maximoIntentos = 3;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function insertarElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}


function generarNumero(){
    let numeroGenerados = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista
    console.log(numeroGenerados);
    console.log(listaNumeros);
    if(listaNumeros.length == numeroMaximo){
        insertarElemento("p","Ya se sortearon todos los números posbibles")
    }else{ 
        if (listaNumeros.includes(numeroGenerados)) {
            return generarNumero();
        }else{
            listaNumeros.push(numeroGenerados);
            return numeroGenerados;
        }
    }
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("numberUser").value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        insertarElemento("p", ` Acertaste el Número,  ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        if(numeroDeUsuario > numeroSecreto ){
            insertarElemento("p","El número es menor");
        }else{
            insertarElemento("p","El Número es mayor");
        }
        intentos++;
        if( intentos > maximoIntentos){
            insertarElemento("p", "Haz alcanzado el maximo de intentos");
        }
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById("numberUser").value = "";
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar el numero de intervalo de numeros
    condicionesIniciales();
    // Generar el numero aleatorio
    //Deshabilitar el boton de nuevo juego
    //Inicializar el numero de intentos
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
function condicionesIniciales() {
    insertarElemento("h1", "Juego del Número secreto");
    insertarElemento("p", ` Escoga un Número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumero();
    intentos = 1;
}
condicionesIniciales();
console.log(numeroSecreto);
