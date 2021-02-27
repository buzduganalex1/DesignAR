import { Injectable } from '@angular/core';
import { Marker } from './marker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  constructor(private http: HttpClient) { }

  getMarkers(): Observable<Marker[]>{
    return this.http.get<Marker[]>("https://cg-markers.azurewebsites.net/");
  }
}
