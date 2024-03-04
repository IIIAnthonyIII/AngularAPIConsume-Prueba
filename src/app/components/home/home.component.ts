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
}
