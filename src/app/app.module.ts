import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import { EpisodesComponent } from './components/info-character/episodes/episodes.component';
import { LocationsComponent } from './components/info-character/locations/locations.component';
import { CardComponent } from './components/info-character/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    InfoCharacterComponent,
    EpisodesComponent,
    LocationsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
