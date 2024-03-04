import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthorServiceService } from '../../service/author-service.service';
import { CommonModule } from '@angular/common';

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
}
