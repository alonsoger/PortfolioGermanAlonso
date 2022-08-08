import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-newproyect',
  templateUrl: './newproyect.component.html',
  styleUrls: ['./newproyect.component.css']
})
export class NewproyectComponent implements OnInit {
  [x: string]: any;
  
  proyUrl: string = '';
  proyTitulo: string = '';
  proyFoto: string = '';

  public archivos:any = [];
  public prevImg: string = '';
  public imgURL: string = ''; //Usando este podemos hacer la previsualizacion. 


  file: File | undefined;
  photoSelected: string | ArrayBuffer;

  constructor(private proyService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      
      reader.onload = event => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  /*
  capFile(event: any) {
    const fileCap = event.target.files[0];
    this.extraerBase64(fileCap).then((imagen: any) => {
    this.prevImg = imagen.base;

    })
    console.log(this.prevImg);

    this.prevImg = this.proyFoto;
    //this.archivos.push(fileCap);
    //console.log(event.target.files);

    /*if(event.target.files.length > 0) {
      
      const reader = new FileReader();
      reader.readAsDataURL(fileCap);
      reader.onload = (event: any) => {
        this.imgURL = event.target.result;
        console.log(this.imgURL);
        
      }
      this.imgURL = this.proyFoto;
    }
  
 }
*/

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
    
  /*
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this['sanitizer'].bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  })
  */


}
