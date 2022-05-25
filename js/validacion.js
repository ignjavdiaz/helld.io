//  --- JUEGOS  ---

let juego1Titulo = document.getElementById('juego1Titulo');
let juego1Precio = document.getElementById('juego1Precio');
let juego1Detalle = document.getElementById('juego1Detalle');
juego1Titulo.innerHTML = `ELDEN RING`;
juego1Precio.innerHTML = `$11999.99`;
juego1Detalle.innerHTML = `EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.`;

let juego2Titulo = document.getElementById('juego2Titulo');
let juego2Precio = document.getElementById('juego2Precio');
let juego2Detalle = document.getElementById('juego2Detalle');
juego2Titulo.innerHTML = `FIFA 22`;
juego2Precio.innerHTML = `$6699.99`;
juego2Detalle.innerHTML = `Powered by Football™. EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos.`;

let juego3Titulo = document.getElementById('juego3Titulo');
let juego3Precio = document.getElementById('juego3Precio');
let juego3Detalle = document.getElementById('juego3Detalle');
juego3Titulo.innerHTML = `Forza Horizon 5`;
juego3Precio.innerHTML = `$11999.99`;
juego3Detalle.innerHTML = `¡La aventura Horizon definitiva te espera! Explora los vibrantes paisajes de mundo abierto en constante evolución situado en México, y disfruta de una acción de conducción ilimitada y divertida con cientos de los mejores coches del mundo.`;

let juego4Titulo = document.getElementById('juego4Titulo');
let juego4Precio = document.getElementById('juego4Precio');
let juego4Detalle = document.getElementById('juego4Detalle');
juego4Titulo.innerHTML = `Need for Speed Heat`;
juego4Precio.innerHTML = `$6699.99`;
juego4Detalle.innerHTML = `No pares por el día y arriésgalo todo por la noche en Need for Speed™ Heat Deluxe Edition, un juego de carreras callejeras dinámico donde los límites de la ley se desvanecen cuando empieza a anochecer.`;

let juego5Titulo = document.getElementById('juego5Titulo');
let juego5Precio = document.getElementById('juego5Precio');
let juego5Detalle = document.getElementById('juego5Detalle');
juego5Titulo.innerHTML = `F1® 22`;
juego5Precio.innerHTML = `$11999.99`;
juego5Detalle.innerHTML = `Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022`;

let juego6Titulo = document.getElementById('juego6Titulo');
let juego6Precio = document.getElementById('juego6Precio');
let juego6Detalle = document.getElementById('juego6Detalle');
juego6Titulo.innerHTML = `Dying Light 2 Stay Human`;
juego6Precio.innerHTML = `$11999.99`;
juego6Detalle.innerHTML = `El virus ha ganado y la civilización ha vuelto a la Edad Oscura. La Ciudad, uno de los últimos asentamientos de la humanidad, está al borde del abismo. Con tu agilidad y tu maestría del combate, deberás sobrevivir y dar forma al mundo. Tus decisiones importan.`;

let juego7Titulo = document.getElementById('juego7Titulo');
let juego7Precio = document.getElementById('juego7Precio');
let juego7Detalle = document.getElementById('juego7Detalle');
juego7Titulo.innerHTML = `Destiny 2`;
juego7Precio.innerHTML = `GRATIS`;
juego7Detalle.innerHTML = `Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.`;

let juego8Titulo = document.getElementById('juego8Titulo');
let juego8Precio = document.getElementById('juego8Precio');
let juego8Detalle = document.getElementById('juego8Detalle');
juego8Titulo.innerHTML = `Lego Star Wars: The Skywalker Saga`;
juego8Precio.innerHTML = `$9499.99`;
juego8Detalle.innerHTML = `Revive las nueve películas de la saga como nunca lo habías hecho antes con este videojuego nuevo que incluye más de 300 personajes jugables, más de 100 vehículos y 23 planetas. ¡Llega la diversión a la galaxia muy, muy lejana! *Incluye el personaje jugable Obi-Wan Kenobi clásico.`;

//  --- FORMULARIO CONTACTO  ---

let btnSoporte = document.getElementById('btn-soporte');

btnSoporte.addEventListener('click',function(){
    let inputNombre = document.getElementById('nombre');
    let inputEmail = document.getElementById('email');
    let inputMensaje = document.getElementById('mensaje');

    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let mensaje = inputMensaje.value;
    
    if(nombre == ""||email == ""||mensaje == ""){
        alert('No has completado todos los campos necesarios.');
    }else{
        let confirmacionValidacion = document.getElementById('confirmacionValidacion');
        confirmacionValidacion.innerHTML = `Gracias<b> ${nombre}</b>. Recibirá una respuesta lo antes posible`;
    }
})

