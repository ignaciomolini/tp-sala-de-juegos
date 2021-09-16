import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarioActual:string;

  constructor(private servicio:UsuarioService) { 
    this.usuarioActual = servicio.nombreUsuario;
  }

  ngOnInit(): void {

  }

}
