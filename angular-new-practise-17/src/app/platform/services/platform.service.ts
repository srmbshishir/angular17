import {VehicleResponse, Vehicles} from "../types/platform.type";
import {map, shareReplay,} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

export function changeValue(value: number){
  console.log(value)
  return value * 100
}

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(){

  }

  // http = inject(HttpClient);
  //
  // private url = 'https://swapi.py4e.com/api/vehicles'
  //
  // private vehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
  //   map((data: any)=>{
  //     data.results.map((v: any)=>({
  //       ...v
  //     }) as Vehicles)
  //   },
  //     shareReplay(1)
  //     )
  // )
  //
  // //expose vehicles from this service
  // vehicles = toSignal(this.vehicles$);


}
