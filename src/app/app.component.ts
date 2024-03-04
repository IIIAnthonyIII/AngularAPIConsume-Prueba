import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Author';
  constructor(private router: Router) {}
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
