export class Proyecto {
    id? : number;
    proyUrl : string;
    proyTitulo : string;
    proyFoto : File;

    constructor(proyUrl : string, proyTitulo : string, proyFoto :File){
        this.proyUrl = proyUrl;
        this.proyTitulo = proyTitulo;
        this.proyFoto = proyFoto;
    }
}
