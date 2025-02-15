export default class Cl_Tienda {
  constructor() {
    this.acumPrecioVen = 0;
    this.acumCosto = 0;
    this.mayor = " ";
    this.auxCogido = 0;
  }
  procesarArticulo(articulo) {
    this.acumPrecioVen += articulo.precioVen;
    this.acumCosto += articulo.costo;

    if (articulo.precioVen > this.mayor) {
      this.mayor = articulo.precioVen;
      this.auxCogido = articulo.codigo;
    }
  }
  gananciaTotal() {
    return this.acumPrecioVen - this.acumCosto;
  }
  codigoArticuloMayor() {
    return this.auxCogido;
  }
}