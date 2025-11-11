import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EventsComponent } from './components/events/events.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { BrandingComponent } from './components/branding/branding.component';
import { SportEventManagementComponent } from './components/sport-event-management/sport-event-management.component';
import { ExhibitionSetupComponent } from './components/exhibition-setup/exhibition-setup.component';
import { ConferenceSeminarsComponent } from './components/conference-seminars/conference-seminars.component';
import { RetailBrandingComponent } from './components/retail-branding/retail-branding.component';
import { LiveEventSetupComponent } from './components/live-event-setup/live-event-setup.component';
import { OtherEventsComponent } from './components/other-events/other-events.component';
import { filter } from 'rxjs/operators';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'sport-event-management', component: SportEventManagementComponent },
  { path: 'exhibition-setup', component: ExhibitionSetupComponent },
  { path: 'conference-seminars', component: ConferenceSeminarsComponent },
  { path: 'retail-branding', component: RetailBrandingComponent },
  { path: 'live-event-setup', component: LiveEventSetupComponent },
  { path: 'other-event', component: OtherEventsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
