let edad;

function VerificarEdad(){
    edad = document.getElementById("edad").value;
    if (edad < 18){
        alert("eres menor de 18")
    }
    else if(edad>=18){
        alert("eres mayor de 18")
    }
    else{
        alert("edad invalida")
    }
}