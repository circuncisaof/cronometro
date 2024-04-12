import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Config_Api } from "./conf_api_service/conf_api.service";
import { Observable, Subject, catchError, retry, tap, throwError } from "rxjs";
import { ICronometro } from "../_interface/icronometro";

@Injectable({
  providedIn: 'root'
})
export class ConnectionServices {
  readonly url = 'http://localhost:3000/api/v1/todo'
  constructor(private http: HttpClient){

  }
  getAll():Observable<ICronometro[]> {
    return this.http.get<ICronometro[]>(`${this.url}`)
  }
  getId(id:string) {
    return this.http.get<ICronometro>(`${this.url}/${id}`)
  }
  save(data:string):Observable<ICronometro> {
    return this.http.post<ICronometro>(this.url,data).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  update(id:string, data_cronometro:ICronometro) {
    console.log(id, todo.todo)
    const data = this.http.patch<ICronometro>(`${this.url}/${id}`, data).pipe(
      retry(1),
      catchError(this.handleError)
    )
    return data
  }
  delete(id:string) {
    return this.http.delete(`${this.url}/${id}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
