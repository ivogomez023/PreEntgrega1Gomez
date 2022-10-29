// voy a hacer un simulador de prestamos 

let nombreusuario = prompt("¿Cual es su nombre?");

 if (nombreusuario == "") { alert ("No ingreso el nombre de usuario") }

 else {let nombreingresado = "¡Bienvenido " + nombreusuario + "!" 

 alert (nombreingresado); }
 
if (nombreusuario == "") {let nombreusuario = prompt("¿Cual es su nombre?");}


  

let dineroingr = prompt("Ingrese la cantidad de dinero que desea adquirir")

let cantcuotas = prompt 
("¿En cuantas cuotas va a devolver su credito 3, 6 o 12?")

 

if ( cantcuotas == "") {alert ( "por favor ingrese una cantidad valida de cuotas")}
if ( cantcuotas == "") { let cantcuotas = prompt 
    ("¿En cuantas cuotas va a devolver su credito 3, 6 o 12?") }




let dinerodiv = (dineroingr / cantcuotas ) 
let cuotasfinales = (dinerodiv * 1.5 ) 


let alertafinal = ("¡Felicidades! usted obtuvo su prestamo, " + "debera devolver " + cantcuotas + " cuotas de " + dinerodiv + " pesos"  )

alert (alertafinal)

