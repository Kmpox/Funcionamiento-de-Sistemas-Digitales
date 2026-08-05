let nota;

function EvaluarNota(){
    nota = document.getElementById("nota").value;

    if(nota < 7 && nota > 0 && nota < 10){
        alert("Nota desaprobada")
    }
    else if(nota <= 10 && nota > 0){
        alert("Aprovado")
    }
    else{
        alert("Nota invalida")
    }
}