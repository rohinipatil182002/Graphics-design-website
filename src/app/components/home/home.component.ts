import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventImages: string[] = [
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/051656b4-0914-475f-93c7-3fb6c277ae5d.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/52622922-1518-47da-9e87-c13a4b332537.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/5e8de829-60a0-4ab1-901a-581c8f2ea3bb.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/64d4ad12-b2f5-4593-baa9-d5370589c517.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/69e81885-19a9-4892-8ec8-8bc91142b7e4.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/7c2198c2-57c5-430f-9661-19dba699983a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/8d14d785-1afd-4bb7-bebd-73aaaddf3056.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/8df15aba-bd65-417e-813e-f21947462ae7.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_5330.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_5351.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_5428.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_5450.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_5464.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_5484.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_7696.jpg',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_7698.jpg',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/IMG_7700.jpg',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/a0380907-111e-44a5-89ce-b3f1b320a5f2.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/a4d40f67-ff26-409c-9cf0-cba932d60366.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/ac098749-163f-4231-9949-3696023effb5.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/b21b74bd-a334-498c-b3c7-5d9f9ac00c67.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/b49194af-4936-4ef6-8fb5-ef93a4fbc980.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/b988aca9-c167-4794-a172-900ba0cd37c2.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/baceed3d-9b1c-4088-8ec9-979465d0e34d.jpg',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/c4c01dac-a761-4a9d-b16d-1728bcf9aa9a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/ce74a363-fa85-4b52-9d5e-8f79127a78ca.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/d45f6350-61e9-4fa7-8d34-d2a880150fd3.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/d72d7119-c9b5-45d7-afb5-6755e111618b.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/e58727f6-583f-4b08-94c1-ef6e51f0f288.JPG',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Recent%20events/NIKE%20AFTER%20DARK%20TOUR%202025/f6d40592-8d7c-42c7-884b-6e77456d02b9.JPG'
  ];

  clientLogos: string[] = [
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/1st%20.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/2.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/3%200r%204th%20.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/3rd.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/4th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/5th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/6th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/7th.png',
    // 'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/08aed8a9cbb0668ad6d6cb4516410d69.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/8th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/9th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/10th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/11th.webp',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/12th.png',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Our%20Clients/Copy%20of%2014.png'
  ];

  eventVideos: string[] = [
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Videos%20on%20Home%20Page/FINAL%20VIDEOS/10K%20BENGALURU%20CHANLLENGE%20%20(1).mp4',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Videos%20on%20Home%20Page/FINAL%20VIDEOS/MPIM%202021%20(1).mp4',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Videos%20on%20Home%20Page/FINAL%20VIDEOS/Pune%20Marathon%20Powered%20By%20Apollo%20Tyres%20&%20Presented%20by%20AFMC-2023.mp4',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Videos%20on%20Home%20Page/FINAL%20VIDEOS/ScreenRecording_11-08-2024%2010-47-25_1%20(1).mp4',
    'https://websitemetadata.blob.core.windows.net/website/1.%20Home%20Page/Videos%20on%20Home%20Page/FINAL%20VIDEOS/TATA%20ULTRA%20MARATHON%202025%20(1).mp4'
  ];

  constructor(private router: Router) { }

  goToOurWorkSection() {
    this.router.navigate(['/events']).then(() => {

      setTimeout(() => {
        const section = document.getElementById('our-work-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    });
  }

}
