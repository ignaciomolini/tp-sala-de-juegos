import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: Observable<any> = this.authSvc.auth.user;

  constructor(private authSvc:AuthService, private rutas: Router) { }

  ngOnInit(): void {  
  }

  async onLogout(){
    try {
      await this.authSvc.logout();
    this.rutas.navigate(['login']);
    } catch (error) {
      console.error(error)
    }    
  }

}
