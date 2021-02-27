import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmoCJyZSDRVXGVa-pRkzZxbZyL8Bm9xMA'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}