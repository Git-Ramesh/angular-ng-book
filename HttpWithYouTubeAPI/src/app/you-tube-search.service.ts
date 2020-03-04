import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { SearchResult } from './you-tube-search/search-result.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {
  YOUTUBE_API_KEY: string = 'AIzaSyDcguuyKu_vM9tFivABH66wGcy7CrUeauY';
  YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
  constructor(private http: HttpClient) { }

  search(query: string): Observable<SearchResult[]> {

    const params : string = [`q=${query}`, 
                             `key=${this.YOUTUBE_API_KEY}`, 
                             `part=snippet`, 
                             `type=video`, 
                             `maxResults=10`].join('&');
    const queryUrl = `${this.YOUTUBE_API_URL}?${params}`

  return  this.http.get<SearchResult[]>(queryUrl).pipe(
      catchError(this.handleError),
      map(response => {
        console.log(`Response: ${response}`);
       return response['items'].map(item => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        })
      })
    );
   // return of([new SearchResult(), new SearchResult()]);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
