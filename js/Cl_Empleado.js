export default class Cl_Empleado {
    constructor(nombre,sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }
    setNombre(nombre) {
        this._nombre = nombre;
    }
    getNombre() {
        return this._nombre;
    }
    setSexo(sexo) {
        this._sexo = sexo;
    }
    getSexo() {
        return this._sexo;
    }

}
