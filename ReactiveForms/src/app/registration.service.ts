import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  url = "http://localhost:4014/register";
  constructor(private http: HttpClient) {}

  register(registrationData): Observable<any> {
    console.log("RegistrationService:register...");
    return this.http
      .post<any>(this.url, registrationData)
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    return throwError(errorMessage);
  }
}
