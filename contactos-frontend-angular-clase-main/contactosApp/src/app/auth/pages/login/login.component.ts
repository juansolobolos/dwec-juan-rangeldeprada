import { Component, OnInit } from '@angular/core';
mport { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  // Credenciales en la página
  credenciales = {

    login: '',
    pass: ''

  };

  errorInicioSesion: boolean = false;

  constructor(

    private router: Router,

    private autenticacionService: AutenticacionService

  ) { }

  ngOnInit(): void {
  }

  login() {

    this.autenticacionService.iniciarSesion(this.credenciales.login, this.credenciales.pass)
    .subscribe(resultado => {
      if(resultado) {
        this.router.navigate([ '/dashboard' ]);
      } else {
        this.errorInicioSesion = true;
      }
    });

  }

}