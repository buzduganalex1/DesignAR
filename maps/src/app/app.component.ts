import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 47.151726;
  lng = 27.587914;
  icon = {
            url: '/assets/PinClipart.com_rugged-cross-clipart_5616491.png',
            scaledSize: {height: 40, width: 40}
          };

  label = "Iasi Center";
}