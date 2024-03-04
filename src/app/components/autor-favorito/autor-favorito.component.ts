import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autor-favorito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './autor-favorito.component.html',
  styleUrl: './autor-favorito.component.css'
})
export class AutorFavoritoComponent {
  data: any[] = [];
  dataObra: any[] = [];
  autorCount: number = 0;
  totalCount: number = 0;
  ngOnInit(): void {
    this.data = this.getAutoresFavoritas();
    this.dataObra = this.getObrasFavoritas();
    this.autorCount = this.data.length;
    this.totalCount = this.data.length + this.dataObra.length;
  }
  private getAutoresFavoritas(): any[] {
    const autoresFavoritasLocal = localStorage.getItem('autoresFavoritos');
    return autoresFavoritasLocal ? JSON.parse(autoresFavoritasLocal) : [];
  }
  private getObrasFavoritas(): any[] {
    const obrasFavoritasLocal = localStorage.getItem('obrasFavoritas');
    return obrasFavoritasLocal ? JSON.parse(obrasFavoritasLocal) : [];
  }
}
