export class Proyecto {
    id? : number;
    proyUrl : string;
    proyTitulo : string;
    proyFoto : string = '';

    constructor(proyUrl : string, proyTitulo : string, proyFoto :string){
        this.proyUrl = proyUrl;
        this.proyTitulo = proyTitulo;
        this.proyFoto = proyFoto;
    }
}
