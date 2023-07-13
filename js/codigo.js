window.addEventListener('load', iniciarJuego)

let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let boton_seleccionar = document.getElementById('boton-seleccionar')
    boton_seleccionar.addEventListener('click', botonSeleccionarMascota)

    let boton_fuego = document.getElementById('boton-fuego')
    boton_fuego.addEventListener('click', ataqueFuego)
    let boton_agua = document.getElementById('boton-agua')  
    boton_agua.addEventListener('click', ataqueAgua)
    let boton_tierra = document.getElementById('boton-tierra')
    boton_tierra.addEventListener('click', ataqueTierra)
}

function botonSeleccionarMascota(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert("No has saleccionado ningún MOKEPON!")
    }
    seleccionMascotaEnemiga()
}

function seleccionMascotaEnemiga(){
    let mascotaEnemiga = aleatorio(1, 3)
    let spanMascotaEnemiga = document.getElementById('mascota-enemigo')
    if(mascotaEnemiga == 1){
        spanMascotaEnemiga.innerHTML = 'Hipodoge'
    }else if (mascotaEnemiga == 2){
        spanMascotaEnemiga.innerHTML = 'Capipepo'
    }else if (mascotaEnemiga == 3){
        spanMascotaEnemiga.innerHTML = 'Ratigueya'
    }

}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueMascotaEnemiga(){
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

function ataqueFuego(){
    ataqueJugador =  'Fuego'
    ataqueMascotaEnemiga()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueMascotaEnemiga()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueMascotaEnemiga()
}

function crearMensaje(){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con '+ ataqueJugador +' y la mascota enemiga ataco con  '+ ataqueEnemigo + '***' + resultado + '***'

    seccionMensajes.appendChild(parrafo)
}

function combate(){
    //Fuego 1, Agua 2, Tierra 3
    let spanVidaJugador = document.getElementById('vidaMascotaJugador')
    let spanVidaEnemigo = document.getElementById('vidaMascotaEnemiga')
    if (ataqueJugador == ataqueEnemigo){
        resultado = "Ha sido empate"
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        resultado = "Jugador ha ganado"
        vidasEnemigo = vidasEnemigo - 1
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        resultado = "Jugador ha ganado"
        vidasEnemigo = vidasEnemigo - 1
        spanVidaEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        resultado = "Jugador ha ganado"
        vidasEnemigo = vidasEnemigo - 1
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = "Pc ha ganado"
        vidasJugador = vidasJugador - 1
        spanVidaJugador.innerHTML = vidasJugador
    }
    crearMensaje()
}