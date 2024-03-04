import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorServiceService } from '../../service/author-service/author-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.css'
})
export class ObrasComponent {
  author: string = "";
  data: any[] = [];
  constructor(private route: ActivatedRoute, private authorService: AuthorServiceService) { }
  ngOnInit(): void {
    const authorParam = this.route.snapshot.paramMap.get('author');
    this.author = authorParam !== null ? authorParam : '';
    this.llenarData();
  }
  llenarData(){
    this.authorService.getDataAutorObras(this.author).subscribe(data =>{
      const obrasFavoritas = this.getObrasFavoritas();
      this.data = data;
      // if (this.isLoggedIn()) {
        
      // }
    })
  }
  private getObrasFavoritas(): any[] {
    const obrasFavoritasLocal = localStorage.getItem('obrasFavoritas');
    return obrasFavoritasLocal ? JSON.parse(obrasFavoritasLocal) : [];
  }
  obraFavorita(obra: any): boolean {
    const obrasFavoritas = this.getObrasFavoritas();
    return obrasFavoritas.find(favorite => favorite.obra === obra);
  }
  marcarObraFavorita(obra: any): void {
    if (!this.obraFavorita(obra)) {
      const obrasFavoritas = this.getObrasFavoritas();
      obrasFavoritas.push({ obra: obra });
      localStorage.setItem('obrasFavoritas', JSON.stringify(obrasFavoritas));
    }
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
