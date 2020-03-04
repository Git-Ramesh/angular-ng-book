import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, debounceTime} from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  uploadUrl = 'http://localhost:4015/file/upload';

  constructor(private http: HttpClient) { }

  uploadFile(fd: FormData): Observable<any> {
    return this.http
               .post<any>(this.uploadUrl, fd, {reportProgress: true, observe: 'events'})
               .pipe(catchError(this.handleError),
                     debounceTime(1000)
                    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    return throwError(errorMessage);
  }
}
