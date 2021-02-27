import { Component, OnInit, SecurityContext } from '@angular/core';
import { Marker } from '../Marker';
import { MarkerService } from '../marker.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  icon = {
            url: '/assets/PinClipart.com_rugged-cross-clipart_5616491.png',
            scaledSize: {height: 40, width: 40}
          };

  constructor(
    private markerService: MarkerService,
    public sanitizer:DomSanitizer)
    {  }

  ngOnInit(): void {
    this.markerService.getMarkers()
    .subscribe(results => this.markers = results);
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

// onMouseOut(infoWindow, $event: MouseEvent) {
//     infoWindow.close();
// }
}
