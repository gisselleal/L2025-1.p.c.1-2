import Cl_Vendedor from "./Cl_Vendedor.js";
import Cl_Ventas from "./Cl_Ventas.js";

let vendedor1 = new Cl_Vendedor("Mary", 150);
let vendedor2 = new Cl_Vendedor("Jose", 135);
let vendedor3 = new Cl_Vendedor("Carlos", 160);
let vendedor4 = new Cl_Vendedor("Pedro", 76);

let ventas = new Cl_Ventas();
ventas.procesarVendedor(vendedor1);
ventas.procesarVendedor(vendedor2);
ventas.procesarVendedor(vendedor3);
ventas.procesarVendedor(vendedor4);

let salida = document.getElementById("salida");
salida.innerHTML ="Resultado"
salida.innerHTML +=`Cantidad de ventas que fueron por 100$ o menos: ${ventas.cantVentaMenor}
 <br> Cantidad de ventas mayores a 100$ : ${ventas.cantVentaMayor}
  <br> Monto total de ventas: ${ventas.acumMontoVenta}`;
