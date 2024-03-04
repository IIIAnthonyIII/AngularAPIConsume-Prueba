import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorServiceService } from '../../service/author-service/author-service.service';

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
      this.data = data;
    })
  }
  marcarObraFavorita(obra: any): void {
    const obrasFavoritasLocal = localStorage.getItem('obrasFavoritas');
    const obrasFavoritas = obrasFavoritasLocal ? JSON.parse(obrasFavoritasLocal) : [];
    const obrasExistente = obrasFavoritas.find((favorite: { obra: any }) => favorite.obra === obra);
    if (!obrasExistente) {
      obrasFavoritas.push({ obra: obra });
      localStorage.setItem('obrasFavoritas', JSON.stringify(obrasFavoritas));
    }
  }
}
