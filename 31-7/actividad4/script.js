let condicion = 2;

function OneToTen(){
    for(let i = 0; i < 11; i++){
        console.log(i);
    }
}

function TenToOne(){
    for(let i = 10; i > -1; i -= 1){
        console.log(i);
    }
}

function TwoOnTwo(){
    while(condicion != 22){
        console.log(condicion)
        condicion += 2;
    }
}

function FiveAlerts(){
    for (let i = 0; i < 5; i++) alert("Mensaje de Bienvenida :D");
}

function ExeAll(){
    OneToTen();
    TenToOne();
    TwoOnTwo();
    FiveAlerts();
}