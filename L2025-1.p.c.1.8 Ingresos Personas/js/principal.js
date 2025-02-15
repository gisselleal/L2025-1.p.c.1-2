import Cl_Persona from "./Cl_Persona.js";
import Cl_Ingreso from "./Cl_Ingreso.js";

let persona1 = new Cl_Persona("Mary", 150);
let persona2 = new Cl_Persona("Jose", 135);
let persona3 = new Cl_Persona("Carlos", 160);
let persona4 = new Cl_Persona("Pedro", 75);

let ingreso = new Cl_Ingreso();

ingreso.procesarPersona(persona1);
ingreso.procesarPersona(persona2);
ingreso.procesarPersona(persona3);
ingreso.procesarPersona(persona4);

let salida = document.getElementById("salida");
salida.innerHTML = "Resultado"
salida.innerHTML += `<br>Monto del ingreso menor ${ingreso.auxmenorIngreso}$
<br>Ingreso promedio ${ingreso.ingresoPromedio()}$<br>
`