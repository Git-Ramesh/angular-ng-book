import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { SearchResult } from '../you-tube-search/search-result.model';
import { YouTubeSearchService } from '../you-tube-search.service';
import { fromEvent, Observable , } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) { 
    console.log(el.nativeElement);
  }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        map((query: string) => {
          const a =  this.youtube.search(query);
          
          return a;
        }),
        switchAll()
      )
      .subscribe(
        (results: SearchResult[]) => {
          console.log('Entered into subscribe...');
          console.log(results);
          this.loading.emit(false);
          this.results.emit(results);
        }, 
        (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }

}
