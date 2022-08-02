import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editsobremi',
  templateUrl: './editsobremi.component.html',
  styleUrls: ['./editsobremi.component.css']
})
export class EditsobremiComponent implements OnInit {
  
  persona : persona = null; 
  
  constructor(public personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private tokenService: TokenService ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })

  }
  
}
