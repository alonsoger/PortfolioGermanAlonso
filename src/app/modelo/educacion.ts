export class Educacion {
    id? : number;
    nombreEdu : string;
    fechaEdu: string;
    descripEdu: string;

    constructor(nombreEdu: string, fechaEdu: string, descripEdu: string){
        this.nombreEdu = nombreEdu;
        this.fechaEdu = fechaEdu;
        this.descripEdu = descripEdu;
    }
}
