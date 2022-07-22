import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {

  nombreEdu: string = '';
  fechaEdu: string = '';
  descripEdu: string = '';

  constructor(private eduService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.fechaEdu, this.descripEdu);
    this.eduService.save(educacion).subscribe(data => {
      alert("Educacion agregada");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      window.location.reload();
    }
    )
  }

}
