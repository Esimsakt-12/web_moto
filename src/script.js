function mostrarMensaje(){
    document.getElementById("mensaje").innerHTML = "Bienvenido a nuestra tienda de Motos Cyber Redes";
}

function resaltar(card){
    card.style.backgroundColor = "lightblue";
}

function restaurar(card){
    card.style.backgroundColor = "white";
}

let imagenes = [
    "kawa1.jpg",
    "kawa2.jpg",
    "kawa3.jpg",
];

let posicion = 0;

function anterior(){
    posicion--;

    if(posicion < 0){
        posicion = imagenes.length -1;
    }
    document.getElementById("imagen").src = imagenes[posicion];
}

function siguiente(){
    posicion++;
    if(posicion >= imagenes.length){
        posicion = 0;
    }
    document.getElementById("imagen").src = imagenes[posicion];
}

function validar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;

    if(nombre === "" || correo === ""){
        document.getElementById("resultado").innerHTML = "Debe completar todos los campos";
        
        return false;
    }

    let contacto = {
        nombre:nombre,
        correo:correo,
        mensaje : document.getElementById("mensaje").value
    }
    let json = JSON.stringify(contacto);

    console.log(json);

    document.getElementById("resultado").innerHTML = "Formulario enviado correctamente";

    return false;


}