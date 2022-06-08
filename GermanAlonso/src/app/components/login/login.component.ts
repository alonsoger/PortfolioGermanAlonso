import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  usuario = '';
  email = '';
  password = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form= this.formBuilder.group({
      usuario:['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      mail:['',[Validators.required, Validators.email]],
    })
   }
   // Hacer los gets de Usuario, password, mail. 

  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
      console.log('Esta todo ok')
      //Llamamos al servicio para enviar los datos al servidor. Y/o agregamos alguna logica extra!
      //Podria ser alguna mensaje o algo divertido!! 
    } else {
      //Corremos las validaciones para que se ejecuten los mensajes de error. 
      this.form.markAllAsTouched();
      console.log('Algun error')
    }
  }

  //Este es la valicacion con el AuthService para ver si esta conectado o no. 
  Login() {
    this.authService.login(this.usuario, this.email, this.password)
  }



  ngOnInit(): void {
  }

}
