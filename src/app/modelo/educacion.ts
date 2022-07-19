export class Educacion {
    id? : number;
    nombreEdu : string;
    fechaEdu: number;
    descripEdu: string;

    constructor(nombreEdu: string, fechaEdu: number, descripEdu: string){
        this.nombreEdu = nombreEdu;
        this.fechaEdu = fechaEdu;
        this.descripEdu = descripEdu;
    }
}
