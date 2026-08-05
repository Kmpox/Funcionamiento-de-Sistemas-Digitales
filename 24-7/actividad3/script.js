let opt;

function ChangeBg(){
    opt = document.getElementById("color").value;
    
    if(opt == "azul"){
        document.body.style.backgroundColor = "blue";
    }
    else if(opt == "rojo"){
        document.body.style.backgroundColor = "red";
    } 
    else if(opt == "amarillo"){
        document.body.style.backgroundColor = "yellow";
    }
}