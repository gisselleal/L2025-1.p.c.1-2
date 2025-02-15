export default class Cl_Persona{
    constructor(nombre,ingreso){
        this.nombre = nombre;
        this.ingreso = ingreso;

    }
    setNombre(nombre){
        this._nombre = nombre;
    }
    getNombre(){
        return this._nombre;
    }
    setIngreso(ingreso){
        this._ingreso = ingreso;
    }
    getIngreso(){
        return this._ingreso;
    }
}