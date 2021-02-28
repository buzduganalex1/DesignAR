import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MarkerComponent } from './marker/marker.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmoCJyZSDRVXGVa-pRkzZxbZyL8Bm9xMA',
      libraries: ['places', 'geometry']
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapsComponent, MarkerComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}