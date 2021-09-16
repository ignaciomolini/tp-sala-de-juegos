import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private authSvc:AuthService, private rutas:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  async onRegister(){
    try {
      await this.authSvc.register(this.email, this.password);
      this.toastr.success("Registrado con exito", "OK", {
        timeOut: 2000
      });
      const user = await this.authSvc.login(this.email, this.password);
      if(user){
        this.rutas.navigate(['home']);   
      }
    } catch (error:any) {
      let mensaje;
      switch (error.code) {
        case "auth/email-already-in-use":
          mensaje = "El email ya se encuentra registrado"
          break;
        default:
          mensaje = "Mal formato de mail o contraseña muy corta"
          break;
      }     
      this.toastr.error(mensaje, "Error", {
        timeOut: 3000
      });  
      }
    }
}
