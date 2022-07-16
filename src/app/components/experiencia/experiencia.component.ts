import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/modelo/exp-laboral';
import { ExpLaboralService } from 'src/app/service/exp-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia : ExpLaboral[] = [];

  constructor(private expService: ExpLaboralService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargaExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargaExp(): void {
    this.expService.lista().subscribe(data => {this.experiencia = data});
  
  }

}
