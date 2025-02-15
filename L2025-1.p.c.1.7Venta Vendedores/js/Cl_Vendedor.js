export default class Cl_Vendedor {
constructor(nombre,montoVenta){
    this.nombre = nombre;
    this.montoVenta = montoVenta;
}
setNombre(nombre){
    this._nombre = nombre;
}
getNombre(){
    return this._nombre;
}
setMontoVenta(montoVenta){
    this._montoVenta = montoVenta;
}
getMontoVenta(){
    return this._montoVenta;
}
}