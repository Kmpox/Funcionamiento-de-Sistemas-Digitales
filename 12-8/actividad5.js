let animales = ["Perro","Gato","Loro","Elefante","Jirafa"];
function ejercicio1(){
    console.log(animales);
}
ejercicio1();

let deportes = ["Deporte1","Deporte2","Deporte3","Deporte4","Deporte5",];
function ejercicio2(){
    deportes.push("Deporte6");
    console.log(deportes);
}
ejercicio2();

let paises = ["Nigeria","Argentina","Francia","Paises Bajos","Noruega"];
function ejercicio3(){
    paises.splice(3,3,"Argelia");
    console.log(paises);
}
ejercicio3();