import { Component, OnInit, SecurityContext } from '@angular/core';
import { Marker } from '../Marker';
import { MarkerService } from '../marker.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CATEGORIES } from '../CATEGORIES';
import { Category } from "../category";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat = 47.151726;
  lng = 27.587914;
  openedInfoWindow;

  markers: Marker[];

  constructor(
    private markerService: MarkerService,
    public sanitizer:DomSanitizer)
    {  }

  ngOnInit(): void {
    this.markerService.getMarkers()
    .subscribe(results => {
      this.markers = results;
      this.markers.forEach(obj => {
        obj.videoURL = 'https://www.youtube.com/embed/kS9ZE-Tzyxc';
        obj.thumbnail = 'https://img.youtube.com/vi/LK-Yegy74s0/mqdefault.jpg';
        obj.category = Math.floor(Math.random() * Math.floor(6));
        obj.markerIcon = this.getMarkerIcon(obj.category);
      }); 
    });
  }

  sanitize(url: string): SafeResourceUrl{
    const sanitized = this.sanitizer.bypassSecurityTrustResourceUrl(url);    
    return sanitized;
  }

  openNewWindow(url): void{
    window.open(url, "_blank");
  }

  onMouseOver(infoWindow, $event: MouseEvent) {
    if(this.openedInfoWindow){
      this.openedInfoWindow.close();
    }
    this.openedInfoWindow = infoWindow;
    infoWindow.open();
  }

  getMarkerIcon(category: Number): Category{
    return CATEGORIES.find(element => element.id == category);
  }
}
