import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes'

import { RecaptchaModule } from 'ng2-recaptcha';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubPagesComponent } from './sub-pages/sub-pages.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './shared/hero/hero.component';
import { FourBulletpointsComponent } from './shared/four-bulletpoints/four-bulletpoints.component';
import { TriplePanesComponent } from './shared/triple-panes/triple-panes.component';
import { ContentComponent } from './shared/content/content.component';
import { OfferComponent } from './shared/offer/offer.component';
import { SmallHeaderComponent } from './shared/small-header/small-header.component';
import { HalfPageImageComponent } from './shared/half-page-image/half-page-image.component';
import { FourColumnComponent } from './shared/four-column/four-column.component';
import { SubheaderComponent } from './shared/subheader/subheader.component';
import { ContactComponent } from './shared/contact/contact.component';
import { GalleryComponent } from './shared/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SubPagesComponent,
    HomeComponent,
    HeroComponent,
    FourBulletpointsComponent,
    TriplePanesComponent,
    ContentComponent,
    OfferComponent,
    SmallHeaderComponent,
    HalfPageImageComponent,
    FourColumnComponent,
    SubheaderComponent,
    ContactComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTES,
	  RecaptchaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
