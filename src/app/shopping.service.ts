
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IShopping } from './shopping';
import { tap, catchError } from 'rxjs/operators';



@Injectable()
export class ShoppingService {

  private _url: string = "/assets/data/shopping.json";

  constructor(private http:HttpClient) { }

  getLists(): Observable<IShopping[]>{
    return this.http.get<IShopping[]>(this._url)
                    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}
