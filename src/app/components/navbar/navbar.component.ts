import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventsResetService } from 'src/app/events-reset.service';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isServiceOpen = false;
  isScrolled = false;
  isEventPage = false;
  isServiceParentActive = false;

  constructor(private router: Router, private eventsReset: EventsResetService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isEventPage = event.urlAfterRedirects.includes('/events');
      }
    });
  this.router.events.subscribe(() => {
  const url = this.router.url;

  this.isServiceParentActive =      
    url.includes('branding') ||
    url.includes('sport-event-management') ||
    url.includes('exhibition-setup') ||
    url.includes('retail-branding') ||
    url.includes('conference-seminars') ||
    url.includes('live-event-setup') ||
    url.includes('other-event');
});
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleServiceDropdown() {
    this.isServiceOpen = !this.isServiceOpen;
  }

  closeDropdown() {
    this.isServiceOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item.dropdown')) {
      this.isServiceOpen = false;
    }
  }
  closeNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  }

resetEventsPage() {
  this.eventsReset.triggerReset();
}
}
