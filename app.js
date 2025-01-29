/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto.';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10.';*/

let numeroSecreto = 0; //Variable de alcance global.
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    //let numeroUsuario = document.querySelector('input');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   /* console.log(typeof(numeroUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto); //Regresa dato booleano.
    */
    //console.log(intentos);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#verificar').setAttribute('disabled', 'true');
      
    } else {
        //El usuario no acerto.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }

        intentos++;
        limpiarCaja();
    }

    //alert('Click desde el boton.');
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles, actualiza la página para volver a jugar.');

    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value='';
    document.querySelector('#valorUsuario').value='';
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto.');
    asignarTextoElemento('p','Indica un número entre 1 y 10.');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    
    document.getElementById('verificar').removeAttribute('disabled');
    //document.querySelector('#reinicar').setAttribute('disabled', 'disabled');
    return;
}

function reiniciarJuego(){
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de número.
    //Generar número aleatorio.
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Deshabilitar el botón de Nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();
