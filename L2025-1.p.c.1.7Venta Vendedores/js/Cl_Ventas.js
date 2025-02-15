export default class Cl_Ventas {
    constructor(){
        this.cantVentaMenor = 0;
        this.cantVentaMayor = 0;
        this.acumMontoVenta = 0;
    }
    procesarVendedor(vendedor){
        if(vendedor.montoVenta <= 100) {
            this.cantVentaMenor++;
        }else if ( vendedor.montoVenta > 100){
            this.cantVentaMayor++;
        }
        this.acumMontoVenta += vendedor.montoVenta;
    }
}