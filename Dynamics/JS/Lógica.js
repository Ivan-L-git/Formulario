let Formulario=document.getElementById("Formulario");
let nombre=document.getElementById("nombre");
let codigo_postal=document.getElementById("codigo_postal");

Formulario.addEventListener("submit", function(e){

    if (nombre.value == "")
    {
        e.preventDefault();
        alert("No ingresaste tu nombre");
    }
    console.log("Nombre del usuario:" + nombre.value);
    let digitos_postal=codigo_postal.value;
    if (digitos_postal.length != "5")
    {
        e.preventDefault();
        alert("El código postal es incorrecto");
    }
    console.log("Código postal:" + codigo_postal.value);
}
);