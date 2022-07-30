import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(private proyService: ProyectoService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargaProy();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  
  }

  cargaProy(): void {
    this.proyService.lista().subscribe(data => {this.proyecto = data;})
  
  }

  delete(id?: number) {
    if(id != undefined) {
      this.proyService.delete(id).subscribe(data => {
        this.cargaProy();
      }, err => {
        alert("No se pudo eliminar");
        }
      )
    }
  }



}
