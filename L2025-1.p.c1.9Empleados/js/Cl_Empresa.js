export default class Cl_Empresa {
    constructor() {
        this.contHombres = 0;
        this.contMujeres = 0;
        this.contTotal = 0;
    
    }
    procesarEmpleado(empleado) {
        if(empleado.sexo == "M") {
            this.contHombres++;
        } else if(empleado.sexo == "F") {
            this.contMujeres++;
        }
        this.contTotal++;
    }
    cantidadHombres() {
        return this.contHombres;
    }
    porcentajeMujeres() {
        return this.contMujeres / this.contTotal * 100;
    }

}