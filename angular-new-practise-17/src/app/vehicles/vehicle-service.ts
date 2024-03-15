import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {catchError, map, Observable, shareReplay, throwError} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {Vehicle, VehicleResponse} from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = 'https://swapi.py4e.com/api/vehicles';
  // http = inject(HttpClient);

  constructor(private http: HttpClient) {

  }

  // First page of vehicles
  // If the price is empty, randomly assign a price
  // (We can't modify the backend in this demo)
  private vehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
    map((data: any) =>
      data.results.map((v: any) => ({
        ...v,
      }) as Vehicle)
    ),
    shareReplay(1),
    catchError(this.handleError)
  );

  // Expose signals from this service
  vehicles = toSignal(this.vehicles$, {initialValue: [] as Vehicle[]});


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
