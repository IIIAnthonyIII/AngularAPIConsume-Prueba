import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-obra-favorita',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './obra-favorita.component.html',
  styleUrl: './obra-favorita.component.css'
})
export class ObraFavoritaComponent {
  data: any[] = [];
  obrasCount: number = 0;
  ngOnInit(): void {
    this.data = this.getObrasFavoritas();
    this.obrasCount = this.data.length;
  }
  private getObrasFavoritas(): any[] {
    const obrasFavoritasLocal = localStorage.getItem('obrasFavoritas');
    return obrasFavoritasLocal ? JSON.parse(obrasFavoritasLocal) : [];
  }
}
