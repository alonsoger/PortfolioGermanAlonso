import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-newhab',
  templateUrl: './newhab.component.html',
  styleUrls: ['./newhab.component.css']
})
export class NewhabComponent implements OnInit {
  
  nombreHab: string = '';
  porcentaje: number = 0;

  constructor(private habService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidades = new Habilidades(this.nombreHab, this.porcentaje);
    this.habService.save(habilidades).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      window.location.reload();
    })
  }

  

}
