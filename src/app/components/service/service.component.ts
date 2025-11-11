import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
// explore.component.ts
services = [
  { image: 'assets/Images/service1.svg', title: 'Branding', text: 'Transforming Visions into Reality: Innovative Branding Solutions for Your Business.' },
  { image: 'assets/Images/service2.svg', title: 'Sports Event Management', text: 'Expert Sports Event Management: Crafting Unforgettable Experiences for Every Event.' },
  { image: 'assets/Images/service3.svg', title: 'Exhibition Setup', text: 'Creating Exceptional Experiences for Successful Expo Management and Execution.' },
  { image: 'assets/Images/service4.svg', title: 'Conference & Seminars', text: 'Comprehensive Conference & Seminar Setup: Engaging, Professional, and Insightful Event Management Solutions.' },
  { image: 'assets/Images/service5.svg', title: 'Retail Branding', text: 'Elevate Your Brand with Strategic and Impactful Retail Branding Solutions.' },
  { image: 'assets/Images/service6.svg', title: 'Live Event Setup', text: 'Delivering Extraordinary Live Events with Precision and Creativity.' },
  { image: 'assets/Images/service7.svg', title: 'Other Events', text: 'Creating Memorable Experiences for All Types of Special Events.' }
];

}
