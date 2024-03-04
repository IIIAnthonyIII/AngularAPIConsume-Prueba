import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../../service/usuario/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private userService: UsuarioServiceService, private router: Router) {}
  login() {
    const users = this.userService.getUsers();
    const user = users.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      console.log('Inicio de sesión exitoso para el usuario:', user.username);
      localStorage.setItem('currentUser', user.username);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}
