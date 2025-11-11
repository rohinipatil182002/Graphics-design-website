import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-conference-seminars',
  templateUrl: './conference-seminars.component.html',
  styleUrls: ['./conference-seminars.component.css']
})
export class ConferenceSeminarsComponent {
@ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  currentIndex = 1;
  interval: any;
  visibleCount = 3;
  total = 0;
  slideWidth = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setupCarousel();
    this.updateVisibleCount();
    this.startAutoScroll();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleCount();
  }

   
  setupCarousel() {
    const track = this.carouselTrack.nativeElement;
    const slides = Array.from(track.children);
    this.total = slides.length;

    const firstClone = slides[0].cloneNode(true) as HTMLElement;
    const lastClone = slides[this.total - 1].cloneNode(true) as HTMLElement;

    firstClone.classList.add('clone');
    lastClone.classList.add('clone');

    this.renderer.insertBefore(track, lastClone, slides[0]);
    this.renderer.appendChild(track, firstClone);

    this.total = track.children.length;

    this.slideWidth = 100 / this.visibleCount;
    track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;

    track.addEventListener('transitionend', () => {

      if (this.currentIndex === this.total - 1) {
        track.style.transition = 'none';
        this.currentIndex = 1; 
        track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;

        setTimeout(() => track.style.transition = 'transform 0.6s ease-in-out');
      }

      if (this.currentIndex === 0) {
        track.style.transition = 'none';
        this.currentIndex = this.total - 2;
        track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;

        setTimeout(() => track.style.transition = 'transform 0.6s ease-in-out');
      }
    });

  }

  updateVisibleCount() {
    const width = window.innerWidth;

    if (width < 768) {
      this.visibleCount = 1;
    } else if (width < 1200) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 3;
    }

    this.slideWidth = 100 / this.visibleCount;

    const track = this.carouselTrack.nativeElement;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;

    setTimeout(() => {
      track.style.transition = 'transform 0.6s ease-in-out';
    });
  }

  nextSlide() {
    const track = this.carouselTrack.nativeElement;
    this.currentIndex++;

    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;
  }

  prevSlide() {
    const track = this.carouselTrack.nativeElement;
    this.currentIndex--;
    track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;
  }

  startAutoScroll() {
    this.interval = setInterval(() => this.nextSlide(), 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
