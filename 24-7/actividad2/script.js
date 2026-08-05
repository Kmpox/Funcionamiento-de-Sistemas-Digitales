let clave;

function VerificarClave(){
    clave = document.getElementById("contra").value;
    if(clave != "1234"){
        alert("Clave invalida");
        return;
    }
    alert("Acceso permitido")
}