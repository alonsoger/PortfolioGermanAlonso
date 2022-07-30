import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyect',
  templateUrl: './editproyect.component.html',
  styleUrls: ['./editproyect.component.css']
})
export class EditproyectComponent implements OnInit {

  proyecto : Proyecto = null;

  constructor(private proyService: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyService.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert('Error al modificar');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyService.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert('Error al modificar');
      this.router.navigate(['']);
    })
  }

}
