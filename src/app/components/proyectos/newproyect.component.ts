import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyect',
  templateUrl: './newproyect.component.html',
  styleUrls: ['./newproyect.component.css']
})
export class NewproyectComponent implements OnInit {

  proyUrl: string = '';
  proyTitulo: string = '';
  proyFoto: string = '';

  constructor(private proyService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.proyUrl, this.proyTitulo, this.proyFoto);
    this.proyService.save(proyecto).subscribe(data => {
      alert("Proyecto añadid0");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      window.location.reload();
    })
  }


}
