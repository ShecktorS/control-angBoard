import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BASE_URL = 'http://localhost:8089/';

  POST = (endPoint: string, data: object) =>
    this.BLOCK_ERROR(this.http.post(this.BASE_URL + endPoint, data));

  GET = (endPoint: string, piva = '/all') =>
    this.BLOCK_ERROR(this.http.get(this.BASE_URL + endPoint + piva));

  DELETE = (endPoint: string, piva: string) =>
    this.BLOCK_ERROR(this.http.delete(this.BASE_URL + endPoint + piva));

  PATCH = (endPoint: string, piva: string, data: object) =>
    this.BLOCK_ERROR(this.http.patch(this.BASE_URL + endPoint + piva, data));

  BLOCK_ERROR(res: any) {
    return res.pipe(
      catchError((error: HttpErrorResponse) => {
        throw error;
      })
    );
  }

  constructor(private http: HttpClient, private data: DataService) {}
}
