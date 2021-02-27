import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MarkerComponent } from './marker/marker.component';
import { SafePipePipe } from './safe-pipe.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmoCJyZSDRVXGVa-pRkzZxbZyL8Bm9xMA'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapsComponent, MarkerComponent, SafePipePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}