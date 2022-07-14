let precPaseA = 8900;
let precPaseM = 6000;
let precEquiA = 8630;
let precEquiM = 5500;

class Reservas {
    constructor( cantidadAd,cantidadMen, equiposAl, equiposMe) {
        this.cantidadAd = cantidadAd;
        this.cantidadMen = cantidadMen;
        this.equiposAl = equiposAl;
        this.equiposMe = equiposMe;
    }
}
var arrayReservas = [];

var comprobacion = prompt("¿Es usted un adulto?");
if (comprobacion === "si") {
    var cantidadA = prompt("Ingrese la cantidad de adultos");
    var cantidadM = prompt("Ingrese la cantidad de menores de 13 años");
    var equiposA = prompt("Ingrese la cantidad de equipos de alta gama");
    var equiposM = prompt("Ingrese la cantidad de equipos de gama media");
    arrayReservas.push(new Reservas(cantidadA, cantidadM, equiposA, equiposM));
}else{
    alert("Se requiere de al menos un adulto para realizar la reserva.");
}

let sumar = precPaseA * cantidadA + precPaseM * cantidadM + equiposA * precEquiA + equiposM * precEquiM;


for (var reserva of arrayReservas) {
    document.write("<li><h3>Adultos: " + cantidadA + "</h3></li>");
    document.write("<li><h3>Precio individual: $" + precPaseA + "</h3></li>");
    document.write("<li><h3>Precio total: $" + precPaseA * cantidadA + "</h3></li>");
    document.write("<li><h3>Menores: " + cantidadM + "</h3></li>");
    document.write("<li><h3>Precio individual: $" + precPaseM + "</h3></li>");
    document.write("<li><h3>Precio Total: $" + precPaseM * cantidadM + "</h3></li>");
    document.write("<li><h3>Equipos de alta gama: " + equiposA + "</h3></li>");
    document.write("<li><h3>Precio individual de equipos de alta gama: $" + precEquiA + "</h3></li>");
    document.write("<li><h3>Precio total de equipos de alta gama: $" + equiposA * precEquiA + "</h3></li>");
    document.write("<li><h3>Equipos de gama media: " + equiposM + "</h3></li>");
    document.write("<li><h3>Precio individual de equipos de gama media: $" + precEquiM + "</h3></li>");
    document.write("<li><h3>Precio total de equipos de gama media: $" + equiposM * precEquiM + "</h3></li>");
    document.write("<li><h3>Precio total de la reserva: $" + sumar + "</h3></li>");

    alert(reserva.cantidadAd);
    alert(reserva.cantidadMen);
    alert(reserva.equiposAl);
    alert(reserva.equiposMe);
}
