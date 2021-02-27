import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit {
  @Input()
  unsanitizedUrl: string

  url: SafeResourceUrl;
  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustUrl(this.unsanitizedUrl);
  }
}
