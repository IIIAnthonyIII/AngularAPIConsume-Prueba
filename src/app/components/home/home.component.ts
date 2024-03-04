import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthorServiceService } from '../../service/author-service/author-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any[] = [];
  constructor(private authorService: AuthorServiceService){}
  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
    this.authorService.getData().subscribe(data =>{
      this.data = data.authors;
    })
  }
  private getAutoresFavoritos(): any[] {
    const autoresFavoritasLocal = localStorage.getItem('autoresFavoritos');
    return autoresFavoritasLocal ? JSON.parse(autoresFavoritasLocal) : [];
  }
  autorFavorito(obra: any): boolean {
    const obrasFavoritas = this.getAutoresFavoritos();
    return obrasFavoritas.find(favorite => favorite.obra === obra);
  }
  marcarAutorFavorito(author: any): void {
    if (!this.autorFavorito(author)) {
      const autoresFavoritos = this.getAutoresFavoritos();
      autoresFavoritos.push({ author: author });
      localStorage.setItem('autoresFavoritos', JSON.stringify(autoresFavoritos));
    }
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
