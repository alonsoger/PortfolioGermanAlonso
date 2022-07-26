import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion : Educacion[] = [];

  constructor(private eduService: EducacionService, private tokenService: TokenService) { 
    
    
  }
  isLogged = false;

  ngOnInit(): void {
    this.cargaEdu();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  
  }

  cargaEdu(): void {
    this.eduService.lista().subscribe(data => {this.educacion = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.eduService.delete(id).subscribe(data => {
        this.cargaEdu();
      }, err => {
        alert("No se elimino");
        }
      )
    }
  }

  onClick(): void {
    alert('Welcome to Gryffindor!')
  }
}
