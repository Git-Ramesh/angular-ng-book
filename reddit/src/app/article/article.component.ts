import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    this.article = new Article('Angular6', 'http://angular.io', 10);
  }
  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {}
}
