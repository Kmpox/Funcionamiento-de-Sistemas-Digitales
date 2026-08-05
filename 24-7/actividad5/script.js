let h;

function Saludar(){
    h = new Date().getHours();

    if( h >= 6 && h <= 12){
        alert("Buenos Dias");
    }
    else if( h >= 13 && h <= 19){
        alert("Buenas Tardes");
    }
    else if( h => 20 || h <= 5){
        alert("Buenas Noches");
    }
}