import { Injectable } from '@angular/core';
import { Marker } from './marker';
import { MARKERS } from './mock-markers';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  constructor() { }

  getMarkers(): Marker[]{
    return MARKERS;
  }
}
