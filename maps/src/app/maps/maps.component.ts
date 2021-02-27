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
        obj.markerIcon = this.getMarkerIcon(obj.category);
        let videoId = this.getYoutubeId(obj.videoUrl);
        if (!videoId) {
          obj.videoUrl = "";
          obj.thumbnail = "";
        }
        else{
          obj.videoUrl = this.getEmbedUrl(videoId);//'https://www.youtube.com/embed/kS9ZE-Tzyxc';
          
          //console.log("DA:" + obj.description + " " + obj.videoUrl);
          obj.thumbnail = this.getThumbnail(videoId); //'https://img.youtube.com/vi/LK-Yegy74s0/mqdefault.jpg';
        }
      }); 
    });
  }

  getThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }

  getEmbedUrl(videoId: string): string{
    return `https://www.youtube.com/embed/${videoId}`;
  }

  //https://www.youtube.com/watch?v=Uwk_V7mfIxM&ab_channel=AlexBuzdugan
  getYoutubeId(videoUrl: string): string {
    if (!videoUrl) {
      return "";
    }
    let startIndex = videoUrl.indexOf("=");
    if (startIndex === -1) {
      return "";
    }
    let endIndex = videoUrl.indexOf("&");
    if (endIndex === -1) {
      return "";
    }
    return videoUrl.substring(startIndex + 1, endIndex);
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
