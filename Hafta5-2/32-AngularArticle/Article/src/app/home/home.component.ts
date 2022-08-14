import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleData:Array<any> = [];

  constructor(private articleServices: ArticleService) { }

  ngOnInit(): void {
    this.articleServices.getArticles().subscribe((res) => {
      this.articleData = res;
    });
  }

}
