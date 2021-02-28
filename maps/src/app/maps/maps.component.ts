import { Component, ElementRef, NgZone, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { Marker } from '../Marker';
import { MarkerService } from '../marker.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CATEGORIES } from '../CATEGORIES';
import { Category } from "../category";

import { MapsAPILoader } from '@agm/core';
import { MARKERS } from '../mock-markers';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  //default to Iasi
  lat = 47.151726; 
  lng = 27.587914;
  address: string;
  zoom = 14;
  zoomedInSize = 15;
  categories = CATEGORIES;

  openedInfoWindow;

  markers: Marker[];

  displayedMarkers: Marker[];

  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  private geoCoder;
  private defaultSearch = true;

  constructor(
    private markerService: MarkerService,
    public sanitizer:DomSanitizer,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone)
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
          obj.thumbnail = this.getThumbnail(videoId); //'https://img.youtube.com/vi/LK-Yegy74s0/mqdefault.jpg';
        }
      }); 

      this.displayedMarkers = this.markers;
    });

    // this.markers = MARKERS;
    // this.markers.forEach(obj => {
    //   obj.markerIcon = this.getMarkerIcon(obj.category);
    //   let videoId = this.getYoutubeId(obj.videoUrl);
    //   if (!videoId) {
    //     obj.videoUrl = "";
    //     obj.thumbnail = "";
    //   }
    //   else{
    //     obj.videoUrl = this.getEmbedUrl(videoId);//'https://www.youtube.com/embed/kS9ZE-Tzyxc';
    //     obj.thumbnail = this.getThumbnail(videoId); //'https://img.youtube.com/vi/LK-Yegy74s0/mqdefault.jpg';
    //   }
    // }); 
    // this.displayedMarkers = this.markers;

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = this.zoomedInSize;

          const center = new google.maps.LatLng(this.lat, this.lng);

          //markers located within x km distance from center are included
          this.displayedMarkers = this.markers.filter(m => {

            const markerLoc = new google.maps.LatLng(m.latitude.valueOf(), m.longitude.valueOf());
            const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000;
            if (distanceInKm < 2.0) {
              return m;
            }
          });

          this.markers.forEach(marker => marker.isSelected = false);
        });
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

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        if(this.defaultSearch){
          this.defaultSearch = false;
        }
        else{
          this.zoom = this.zoomedInSize;
        }
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  //zoom in when searching is complete
  zoomOn($event: any){
    $event.preventDefault();
    this.zoom = this.zoomedInSize;
  }

  setActive(index){
    this.displayedMarkers.forEach(marker => {
      marker.isSelected = false;
    });
    var marker = this.displayedMarkers.find(marker => marker.id === index);
    marker.isSelected = true;

    this.lat = marker.latitude.valueOf();
    this.lng = marker.longitude.valueOf();
    this.zoom = 18;
  }
}
