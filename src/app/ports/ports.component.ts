import { Observable } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit {

  // articles: Article[];

  // 更優的做法, 就是善用 RxJS
  articles$: Observable<Article[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.postService.getArticles().subscribe(result => {
    //   this.articles = result.articles
    // });

    // 更優的做法, 就是善用 RxJS
    this.articles$ = this.postService.getArticles().pipe(
      map(result => result.articles)
    );
  }
}
