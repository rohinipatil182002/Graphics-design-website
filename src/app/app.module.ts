import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { EventsComponent } from './components/events/events.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrandingComponent } from './components/branding/branding.component';
import { SportEventManagementComponent } from './components/sport-event-management/sport-event-management.component';
import { ExhibitionSetupComponent } from './components/exhibition-setup/exhibition-setup.component';
import { RetailBrandingComponent } from './components/retail-branding/retail-branding.component';
import { ConferenceSeminarsComponent } from './components/conference-seminars/conference-seminars.component';
import { LiveEventSetupComponent } from './components/live-event-setup/live-event-setup.component';
import { OtherEventsComponent } from './components/other-events/other-events.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    FooterComponent,
    ServiceComponent,
    EventsComponent,
    ClientsComponent,
    ContactUsComponent,
    BrandingComponent,
    SportEventManagementComponent,
    ExhibitionSetupComponent,
    RetailBrandingComponent,
    ConferenceSeminarsComponent,
    LiveEventSetupComponent,
    OtherEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
