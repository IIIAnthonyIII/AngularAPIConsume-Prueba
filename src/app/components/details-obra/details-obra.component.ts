import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorServiceService } from '../../service/author-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-obra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-obra.component.html',
  styleUrl: './details-obra.component.css'
})
export class DetailsObraComponent {
  author: string = "";
  title: string = "";
  data: any[] = [];
  constructor(private route: ActivatedRoute, private authorService: AuthorServiceService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const authorParam = params['author'];
      const titleParam = params['title'];
      this.author = authorParam !== null ? authorParam : '';
      this.title = titleParam !== null ? titleParam : '';
    });
    this.llenarData();
  }
  llenarData(){
    this.authorService.getDataDetailsObra(this.author, this.title).subscribe(data =>{
      this.data = data;
      console.log(data);
      
    })
  }
}
