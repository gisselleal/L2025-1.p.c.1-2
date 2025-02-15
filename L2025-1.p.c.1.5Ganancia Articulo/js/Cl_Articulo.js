export default class Cl_Articulo {
    constructor(codigo, costo, precioVen) {
        this.codigo = codigo;
        this.costo = costo;
        this.precioVen = precioVen;

    }

    setCodigo(codigo) {
        this._codigo = codigo;
    }
    getCodigo() {
        return this._codigo;
    }
    setCosto(costo) {
        this._costo = +costo;
    }
    getCosto() {
        return this._costo;
    }
    setPrecioVen(precioVen) {
        this._precioVen = + precioVen;
    }
    getPrecioVen() {
        return this._precioVen;
    }
}