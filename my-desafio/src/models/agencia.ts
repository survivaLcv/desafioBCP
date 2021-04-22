export class Agencia {
    
    agencia :string;
    distrito:string;
    provincia:string;
    departamento:string;
	direccion:string;
	lat: number;
	lon: number;

    constructor( agencia :string, distrito:string, provincia:string, departamento:string, direccion:string, lat: number, lon: number){
        this.agencia= agencia;
        this.distrito= distrito;
        this.provincia= provincia;
        this.departamento= departamento;
        this.direccion= direccion;
        this.lat= lat;
        this.lon= lon;

    }
    
}
