import { SingleArticle } from './../../interfaces/single-article';
import { Article } from './../../interfaces/article';
import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  // article: Article;

  // 更優的做法, 就是善用 RxJS
  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    // this.route.paramMap.pipe(
    //   map(paramMap => paramMap.get('id')),
    //   switchMap(id => this.postService.getArticle(id))
    // ).subscribe(result => { this.article = result.article; })

    // 更優的做法, 就是善用 RxJS
    this.article$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id => this.postService.getArticle(id)),
      map(singleArticle => singleArticle.article),
      // shareReplay(1), // 類似 cache, 避免重複呼叫 API
    );

  }

}
