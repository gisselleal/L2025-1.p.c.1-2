export default class Cl_Ingreso{
    constructor(){
        this.menor = Infinity;
        this.auxmenorIngreso = 0;
        this.acumIngreso = 0;
        this.contPersonas = 0;

    }
    procesarPersona(persona){
        this.contPersonas++;
        this.acumIngreso += persona.ingreso;
        if(persona.ingreso < this.menor){
            this.menor = persona.ingreso;
            this.auxmenorIngreso = persona.ingreso;
        }
    }

    ingresoPromedio(){
        return this.acumIngreso / this.contPersonas;
    }
}