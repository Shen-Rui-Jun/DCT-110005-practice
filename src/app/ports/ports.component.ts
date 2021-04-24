import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';


@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit {

  articles: Article[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getArticles().subscribe(result => {
      this.articles = result.articles
    });
  }
}
