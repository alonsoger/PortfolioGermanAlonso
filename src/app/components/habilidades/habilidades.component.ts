import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];

  constructor(private habService: HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargaHab();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargaHab(): void{
    this.habService.lista().subscribe(data => {this.habilidades = data;})
  }

  delete(id?: number) {
    if(id != undefined) {
      this.habService.delete(id).subscribe(data => {
        this.cargaHab();
      }, err => {
        alert("No se pudo eliminar");
        }
      )
    }
  }

  
}
