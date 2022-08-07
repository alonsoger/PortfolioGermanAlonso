import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = []; 
  errMsj!: string;
  form: FormGroup;
  usuario = this.nombreUsuario;
  email = '';


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private tokenService: TokenService) {
      this.form= this.formBuilder.group({
      usuario:['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8)]]
      //,email:['',[Validators.required, Validators.email]],
    })
   }

//------------------- USUARIO ------------------------------   
   get NombreUsuario(){
     return this.form.get("nombreUsuario");
   }
   get UsuarioValid(){
     return this.NombreUsuario?.touched && !this.NombreUsuario?.valid;
   }
//------------------- PASSWORD ------------------------------ 
   get Password(){
     return this.form.get("password");
   }
   get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
/*------------------- EMAIL ---------------------------------    
   get Email(){
     return this.form.get("email");
   }
   get EmailValid(){
     return false;
   }*/
//------------------- FUNCIONES --------------------------------- 
  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
      console.log('Esta todo ok');
      this.router.navigate(['']); //Navegacion hacia el inicio
      //Llamamos al servicio para enviar los datos al servidor. Y/o agregamos alguna logica extra!
      //Podria ser algun mensaje o algo divertido!! 

    } else {
      //Corremos las validaciones para que se ejecuten los mensajes de error. 
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

}
