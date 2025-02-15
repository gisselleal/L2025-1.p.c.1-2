import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

let empleado1 = new Cl_Empleado("Mary", "F");
let empleado2 = new Cl_Empleado("Jose", "M");
let empleado3 = new Cl_Empleado("Carlos", "M");
let empleado4 = new Cl_Empleado("Pedro", "M");

let empresa = new Cl_Empresa();

empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);

let salida = document.getElementById("salida");

salida.innerHTML = "Resultado"
salida.innerHTML += `<br> Cantidad de hombres: ${empresa.cantidadHombres()}
<br> Porcentaje de mujeres: ${empresa.porcentajeMujeres() }%`;