import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private rutas:Router, private servicio:UsuarioService, private authSvc:AuthService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

  async onLogin(){
    try {
      const user = await this.authSvc.login(this.email, this.password);
      if(user){
        this.rutas.navigate(['home']);    
      }
    } catch (error) {
      this.toastr.error("Email o contraseña incorrectos", "Error", {
        timeOut: 2000
      });
    }
  }

  accesoRapido(){
    const checkbox:any = document.getElementById('accRap');

    if(checkbox.checked){
      this.email = 'ejemplo@gmail.com';
      this.password = '123456';
    }
    else{
      this.email = '';
      this.password = '';
    } 
  }

  // siguiente(){
  //   this.servicio.nombreUsuario = "lalala";
  //   console.log("siguiente");   
  //   var modelo = this;
  //   setTimeout(function(){
  //     modelo.rutas.navigate(['home']);
  //   }, 2000)
  // }
}
