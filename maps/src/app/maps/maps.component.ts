import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat = 47.151726;
  lng = 27.587914;
  icon = {
            url: '/assets/PinClipart.com_rugged-cross-clipart_5616491.png',
            scaledSize: {height: 40, width: 40}
          };

  label = "Iasi Center";
  
  constructor() { }

  ngOnInit(): void {
  }

}
