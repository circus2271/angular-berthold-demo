import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PartyComponent } from './party/party.component';
import { RentComponent } from './rent/rent.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { ScullyLibModule } from '@scullyio/ng-lib';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'party',
    component: PartyComponent,
  },
  {
    path: 'rent',
    component: RentComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

// https://ddubrava.github.io/angular8-yandex-maps/#/
const mapConfig: YaConfig = {
  apikey: 'c150add6-5de2-4a39-9147-98451ce002df',
  lang: 'en_US',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
    HttpClientModule,
    CommonModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    ScullyLibModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PartyComponent,
    RentComponent,
    ContactsComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
