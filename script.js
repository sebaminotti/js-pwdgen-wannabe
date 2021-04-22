var nome =prompt("inserisci nome").toLowerCase();
var cognome =prompt("inserisci cognome").toLowerCase();
var colore = prompt("inserisci colore").toLowerCase();
const numero = 21;


var password = nome+cognome+colore+numero;
console.log(password)

document.getElementById("nome").innerHTML = " il tuo nome :" + nome;
document.getElementById("cognome").innerHTML= "il tuo cognome :" +  cognome;
document.getElementById("colore").innerHTML = "il tuo colore : " + colore;

document.getElementById("password").innerHTML = "la tua password  è : " + " " + password