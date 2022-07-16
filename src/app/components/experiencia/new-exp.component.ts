import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/modelo/exp-laboral';
import { ExpLaboralService } from 'src/app/service/exp-laboral.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  
  nombreExp: string = '';
  descripExp: string = '';

  constructor(private expService: ExpLaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new ExpLaboral(this.nombreExp, this.descripExp);
    this.expService.save(experiencia).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }

  
}
