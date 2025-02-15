import Cl_Articulo from "./Cl_Articulo.js";
import Cl_Tienda from "./Cl_Tienda.js";

let articulo1 = new Cl_Articulo(888, 10, 15);
let articulo2 = new Cl_Articulo(777, 20, 25);
let articulo3 = new Cl_Articulo(999, 15, 25);
let articulo4 = new Cl_Articulo(666, 25, 35);
let articulo5 = new Cl_Articulo(111, 50, 70);
let articulo6 = new Cl_Articulo(333, 40, 50);
let articulo7 = new Cl_Articulo(444, 80, 100);
let articulo8 = new Cl_Articulo(222, 5, 10);

let tienda = new Cl_Tienda()
tienda.procesarArticulo(articulo1);
tienda.procesarArticulo(articulo2);
tienda.procesarArticulo(articulo3);
tienda.procesarArticulo(articulo4);
tienda.procesarArticulo(articulo5);
tienda.procesarArticulo(articulo6);
tienda.procesarArticulo(articulo7);
tienda.procesarArticulo(articulo8);

let salida = document.getElementById("salida");
salida.innerHTML = "resultado"
salida.innerHTML += `<br> Ganancia total: ${tienda.gananciaTotal()}
 <br> Codigo del articulo con mayor precio de venta : ${tienda.codigoArticuloMayor()} `