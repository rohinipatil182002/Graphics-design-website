import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventsResetService } from 'src/app/events-reset.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  showGallery = false;
  showCarousel = false;
  selectedWork: any = null;
  selectedGallery: any = [];
  currentCarouselIndex = 0;
  isYearWise = false;

  images: string[] = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/0ea41c92-8d38-4f51-b053-f3a80a96b417.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/3564b599-751e-423d-8b8c-3e3d8f14b316.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/8aa30067-c1e5-469a-ae8e-43d64ec58941.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_0967.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2038.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_1287.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2060.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2769.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2973.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2989.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_3017.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_3106.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_3138.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_5002.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_5022.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_5663.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_6317.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_6867.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_9132.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/fbd5e215-02f1-492c-8234-ff7575a2ec5a.JPG'
  ];

  national_conference = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9432.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9433.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9434.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9436.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9435.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9440.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-08-14-25%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-08-14-24.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/IMG_9442.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-08-14-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-13-36-57.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-13-37-01.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-13-37-02.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/PHOTO-2024-09-03-13-37-05.jpg'
  ];

  mumbai_marathon_2023 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/IMG_8316.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/IMG_8546.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/IMG_8661.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2022-08-19-12-44-44.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2022-08-19-16-09-09.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2022-08-20-23-21-08.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2022-08-20-23-21-10.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2022-08-20-23-21-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-23-02-13-14%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-24-21-25-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-25-01-29-53.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-25-01-30-22.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-25-02-57-08.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-25-02-57-16.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-25-04-02-26.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/PHOTO-2024-08-25-04-02-27.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.45%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.50%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.50%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.50.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.52%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.52.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.53%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.53.jpeg'
  ];

  mumbai_marathon_2024 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/IMG_3151.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-22-23-13-36.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-23-02-13-12%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-23-02-13-12.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-23-02-13-14%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-23-02-13-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-23-02-13-16.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-24-21-25-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-01-30-22.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-01-32-09.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-02-57-08.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-02-57-16.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-04-02-27%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-04-02-27.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-04-21-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-04-34-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/2024/PHOTO-2024-08-25-04-47-21.jpg'
  ];

  delhi_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/2eac767e-2913-496f-9109-776b80d9fb2a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/2cd5cae5-b9a3-4317-ab85-f7e5b64852e8.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/2fc6c3f8-6bcc-4fa2-a55d-33f240f02fa7.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/312ea8a5-7cac-49a6-8c47-eba0716f5d86.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/4e769d16-0185-4536-b50d-7f2eb33741f5.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/366a8c25-06e2-4cd9-b347-efbe437afb91.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/546a7f65-8adc-4504-9734-b1fac58f53a6.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/55e2f38c-b654-4ced-ae7f-3d1b216a15c2.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/585b03f0-5d55-4bbd-b4f8-4951a7bf69c0.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/5bbba9a9-7598-4653-a0b7-cbfd38f74bae.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/5d60c2a9-4076-4f2d-9b82-bfdc05262103.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/71724106.cms.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/795ff68e-274c-40b4-9899-53488f670ba0.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/71d08f6c-5012-49c8-b072-e13cc84d2aff.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/7ed58e55-33a1-490c-a8b8-8c9263b0faf0.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/98b8708f-1ba4-4450-ad95-7b27cda5a47c.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/9a91071c-baac-47ed-91dc-8232d8dc4d5a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_0363.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_20181021_065226_3.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_0936.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_20181021_065253_1.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_20181021_065510_2.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_20181021_070508_1.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_20181021_071652_3.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_2844.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_2997.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_2998.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_2999.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_3001.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_3002.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_3004.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_3005.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/IMG_3006.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/e448b59f-576c-4d9b-8e46-2fafd0ae9f37%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/fd6e9f5e-5a59-45e3-a4aa-e7c57a5fcb5a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/fbd5e215-02f1-492c-8234-ff7575a2ec5a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/b03bf23a-4f8f-4d71-9051-03f5d9398124.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/maxresdefault.jpeg'
  ];

  amazonrun = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/IMG_6292.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-02(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-02.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-04.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-14(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-05.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-15(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-15.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-16.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-17(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-17.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/WhatsApp%20Image%202024-03-05%20at%2012.10.43%20(2).jpeg'
  ];

  apollo_tyres_marathon_2023 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/Double-Olympic-champion-David-Rudisha-all-set-to-flag-off-the-Apollo-Tyres-New-Delhi-Marathon.-1024x683.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/IMG_6301.PNG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/IMG_8867.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/IMG_8915.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-23-23-12-38.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-24-00-30-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-24-00-51-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-25-18-51-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-25-19-30-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-25-22-24-19.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-26-03-28-39.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2023/PHOTO-2023-02-26-05-23-59.jpg',

  ];

  apollo_tyres_marathon_2024 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_3108.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_9165.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_9171.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_9242.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_9272.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_9286.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/IMG_9291.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-22%20at%2021.12.33.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-22%20at%2021.34.57.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-22%20at%2021.35.42.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-22%20at%2021.35.44%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-22%20at%2021.35.44.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-22%20at%2023.40.42.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2001.41.11.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2001.41.24.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2002.03.30.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2010.25.58.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2010.53.15.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2011.41.46.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2015.55.10.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-23%20at%2018.12.33.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2020.18.57.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2022.51.27.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2023.40.07.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2023.46.12.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2023.46.15%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2023.46.15.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-24%20at%2023.46.47.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2000.08.55.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2000.09.02.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2000.09.10.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2000.20.57.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2000.28.59.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2001.31.51.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2001.31.55.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2002.57.53.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2002.58.37.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2002.58.44.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2002.59.45.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2003.23.31.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2003.23.43.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2003.23.58.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2003.36.12.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2004.04.52.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2004.09.21.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2004.09.24.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2004.09.27.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-02-25%20at%2004.28.56.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-03-05%20at%2012.10.19%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-03-05%20at%2012.10.20%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-03-05%20at%2012.10.20.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/2024/WhatsApp%20Image%202024-03-05%20at%2012.11.01.jpeg'

  ];

  bajaj_pune_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3198.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3200.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3201.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3205.WEBP',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_3204.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8700.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8703.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8790%20copy.PNG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8791.PNG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8798.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8796.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_8799.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/IMG_9746.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/PHOTO-2022-11-26-21-44-45.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/PHOTO-2022-11-28-01-05-40.jpg'
  ];

  bajaj_thane_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-16-13-03-22.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-16-13-03-23%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-16-13-03-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-16-13-03-24.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-18.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-19%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-19.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-20%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-20.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-22%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-22.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-23%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-43-24.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-55-32%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/2024/PHOTO-2024-08-18-04-55-32.jpg',
  ];

  Bengaluruchallenge = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-06-29-12-55-49.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-06-29-17-37-48.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-06-29-17-37-49.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-01-21-46-56.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-01-22-06-30.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-01-21-46-57.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-02-00-24-24.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-02-02-04-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-02-02-04-17.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-02-03-30-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-02-10-17-55.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2023-07-02-04-14-28.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-01-14-51-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-04-13-58-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-04-13-59-10.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-04-15-13-38.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-04-23-37-39.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-06-22-57-42.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-07-00-20-18.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-07-00-57-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/PHOTO-2024-07-07-02-39-11.jpg'
  ];

  Bengalurutech = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/13d10f45-3b8c-47c1-80cd-29a27a23eae7.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/IMG_2909.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/IMG_2910%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/IMG_2923.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/IMG_2943.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/IMG_4382.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.53%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.53%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.53.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.54%20(3).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.54%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.55%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.55%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.55.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56%20(3).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.57%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.57%20(3).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.58.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.59%20(3).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.05.00.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.11.02%20(1).jpeg'
  ];

  can_run = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/IMG_8513.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/IMG_8606.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/IMG_8669(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/IMG_8666.PNG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/IMG_9837.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/IMG_8669.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/PHOTO-2023-03-02-18-10-56.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/PHOTO-2023-03-02-18-10-57.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/PHOTO-2023-03-05-02-25-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/PHOTO-2023-03-05-03-06-03.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/PHOTO-2023-03-05-05-38-08.jpg'
  ];

  fastandupmumbai = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/01f25235-cdf3-4f5d-bdae-07a865ed7a88.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1039.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1736.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1733.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1741.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1766.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1814.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1820.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1879.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1922.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1923.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1925.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1930.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1932.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1939.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1950.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1971.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1962.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_2003.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_2012.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_2023%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/d4d77d28-47a3-4d46-9c2b-099da760ce51.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/e1f4b342-8f19-4cad-9a41-6f2f72516bff.JPG'
  ];


  gdiasummit = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-16-23-54-23%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-01-07-20.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-01-07-34.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-01-08-02.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-03-03-04.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-10-57.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-10-58.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-11-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-12-01.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.50%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.51.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.52.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.54%20(1).jpeg'
  ];

  himalaya_walkatahon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0382.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0388.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0413.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0424.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0425.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0427.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0429.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0431.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0432.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0438.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0439.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0441.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0440.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0444.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0494.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/IMG_0495.jpg'
  ];

  hiranandani_marathon_2024 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/1484bfbd-90a1-4d60-bb52-4339a7e247e5.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/1DEF2340-5CB4-449B-9520-7BD8153163DB.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8286.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8290.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8329.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8345.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8417.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8594.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8595.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8596.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/IMG_8597.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-10%20at%2023.48.41.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-10%20at%2023.48.50.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2002.40.33.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.21.58.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.22.08.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.23.14.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.23.32.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.34.28.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.34.41.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2003.39.26.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2004.42.05.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2004.42.34.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2004.42.36.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2004.55.57.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2005.10.11.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2005.10.24.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2005.11.05.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2014.19.06.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2014.19.32.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2014.19.44.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2014.21.18.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-11%20at%2014.21.45.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-02-14%20at%2023.45.57.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-03-05%20at%2012.10.27.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2024/WhatsApp%20Image%202024-03-05%20at%2012.10.28.jpeg',

  ];

  hiranandani_marathon_2025 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8748.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8757.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8767.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8768.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8770.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8834.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8869.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8870.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8909.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8960.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_8961.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9045.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9052.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9094.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9098.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9132.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9142.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9146.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9148.JPG', ,
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9155.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9159.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9181.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/IMG_9312.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/a5659de6-5631-4499-8a07-ce141481e526.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/2025/cf0433be-0baf-4c24-8290-d7129d9062d9.JPG'
  ];

  hpcl = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-02-01-39%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-02-01-39%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-03-40-48%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-02-01-39.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-03-40-48%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-03-40-48%204.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-03-40-48.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-10-50-10%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-10-50-10.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-13-47-48.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-13-47-49%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/PHOTO-2024-12-08-13-47-49.jpg'
  ];

  indian_navy = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/IMG_3213.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/IMG_3210.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/IMG_7661.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/IMG_7764.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-03-18-21-20.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-03-18-21-15.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-03-18-15-29.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-03-18-21-53%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-03-18-54-19.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-04-02-55-58.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-04-02-55-59%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-04-02-56-00.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-06-06-19-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-06-10-20-51.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-06-10-20-52.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-06-10-21-05%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-06-10-20-57.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-06-10-21-05.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/PHOTO-2023-08-10-17-03-26.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/WhatsApp%20Image%202024-03-05%20at%2012.10.54%20(3).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/WhatsApp%20Image%202024-03-05%20at%2012.10.54%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/WhatsApp%20Image%202024-03-05%20at%2012.10.54.jpeg'
  ];

  investmentkarnatak = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/Copy%20of%20IMG_0284.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/IMG_0283.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/IMG_0284.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/IMG_2117.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-10-29-23-31-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-11-24-43.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-11-24-44.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-12-37-30.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-19-34-03.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-22-28-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-00-31-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-08-00-05.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-11-25-28%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-11-25-28.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-19-31-01.jpg'
  ];

  invincible_women = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/IMG_9665.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/IMG_9675.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/IMG_9680.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/IMG_9681.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-18-04-05-44.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-18-17-49-45.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-18-19-14-15.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-18-20-50-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-00-50-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-00-50-21.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-02-23-03.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-02-23-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-03-43-11.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-03-47-38.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-03-47-58.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/PHOTO-2023-02-19-05-01-59.jpg'
  ];

  iocl_shivaji_triathlon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/969db289-13ac-4c69-b897-25604077b361.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/9a88a204-7c9e-4f09-878f-5846cb33dcba.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/IMG_6291.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-10-23-44-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-03-30-04.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-11-11-46.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-19-05-51.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-20-00-00.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-21-56-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-21-57-00.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-22-59-34%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-23-32-20.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-23-51-06.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-11-23-59-29.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/PHOTO-2023-02-12-01-19-47.jpg',
  ];

  jio_mumbai = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/46ec155d-07e5-4844-a7a1-f64b42a6afaa.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/DSC_6612_1744446438624.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/IMG_5297.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/IMG_5330.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/IMG_6278.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/IMG_6280.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/IMG_8486.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-12-06-48-07.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-12-06-48-12.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-13-07-10-05.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-13-07-10-33%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-13-07-10-33.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-13-07-10-36.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-13-07-10-37%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2022-11-13-07-10-37.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-16-20-48-42.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-17-04-20-29.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-17-04-39-25%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-17-04-39-25%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-17-04-39-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-19-11-42-08.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/PHOTO-2023-12-19-11-42-11.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/f7d7ca9a-1528-4643-82c6-2d582c903961.JPG'
  ];

  jsw_squash = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/12733557-d888-41d6-a123-6ad72c884221.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/3ec7392d-3a08-412d-b6da-242888186671.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/478a3864-b1d6-4da1-9a68-7f14bb56944d.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/65fccee6-ffdd-48d3-b25d-cbd70fe2455a.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/89327392-7aec-44ac-a186-dccdc5cef1e7.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/9d77adde-5cea-4bb7-b151-80dff14754dc.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/9d846c6e-c173-4581-85e7-867ccdce38c0.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/IMG_2532.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/IMG_2538.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/ac933653-7fe3-4782-996b-f441314d18e1.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/b5635f72-a793-42eb-8372-404c4074f352.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/bbac3228-52ff-4dbe-9b07-5ee3b047c915.JPG',
  ];


  kolkata_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/IMG_7684.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2023-02-04-00-15-19.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2023-02-04-01-13-09.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2023-02-04-01-24-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2023-02-04-19-35-36.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2023-02-04-23-34-11.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2023-02-05-01-19-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-02-20-03-48%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-02-22-14-42.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-02-22-14-43%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-02-22-14-43.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-03-19-36-53.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-03-19-36-54.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-03-19-55-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-04-02-28-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-04-03-24-08.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/PHOTO-2024-02-04-05-29-18.jpg',
  ];

  lollapalooza = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/IMG_6782%20(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/IMG_6785%20(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/IMG_9683.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2023-01-26-17-26-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2023-01-26-18-13-48.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2023-01-26-21-22-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2023-01-27-00-24-34.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2024-01-26-17-46-48%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2024-01-27-00-03-00.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2024-01-27-00-18-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2024-01-27-05-13-01.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2024-01-27-05-33-32%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/PHOTO-2024-01-27-09-16-07.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.30%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.30.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.40%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.58%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.58.jpeg',
  ];

  maharastra_police_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/26034656-705c-496e-a0fd-8997c2a90bc7.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/427af27c-2a22-4c0a-a04c-a455da7ecd32%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/835636c3-5ae2-464b-8b72-8d450eb5032c.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/89981d1f-c03b-4e31-a14c-2b6ca5dec86a%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/IMG_6861%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/IMG_6863%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/a8f66302-5147-43a6-9cae-40ba445ea217.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/b64e1d80-1f93-407b-b162-8c6ec171ebcc.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/c2baf96b-60a0-412e-8c67-8754389b64a5%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/c844e017-3d8d-47b2-a1c3-8088837a46ba%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/eb107b57-2c20-47e2-b580-4846282ddde2%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/f0826bb6-d54f-4867-a8ea-490995313a53%202.JPG',
  ];

  mazdock_challege_2024 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-04-23-11-19.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-04-23-11-27.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-04-23-40-19.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-00-01-26.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-02-03-39.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-22%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-22.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-24%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-24.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-05-10-36.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-06-39-56.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/PHOTO-2024-01-07-06-40-04.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/WhatsApp%20Image%202024-03-05%20at%2012.10.41%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2024/d8988936f0d44b18b71c51512653d1f9.jpg',
  ];

  mazdock_challege_2025 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/GavAikRWEAEQjnR.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-12-02-41-35%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-12-02-41-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-12-02-41-36%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-12-02-41-36.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-11-48%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-11-48%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-11-48%204.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-11-48%205.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-11-48.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-11-49.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-13-22%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-13-22%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-13-22.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-13-23%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-13-23%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/2025/PHOTO-2024-12-15-09-13-23.jpg',
  ];

  one_run_bengaluru = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/IMG_8685.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/IMG_8686.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/IMG_8850.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/IMG_9677.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-24-15-23-28.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-24-17-40-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-24-17-51-42.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-24-18-02-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-02-30-59.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-05-46-28.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-05-46-29%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-05-46-29.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-05-46-30.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-05-46-31.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/PHOTO-2023-03-26-05-46-32.jpg',
  ];

  pinkathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/30a48ef0-d4a7-41d7-88e1-b43bf999dca8.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/3fb1f4dd-713a-45a8-841a-b5b4bda94e03.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/IMG_7776.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/IMG_7777.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/IMG_8610.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/IMG_8628.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/colors-pinkathon_1556010839.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/colors-pinkathon_1556010870.jpg'
  ];

  satara_marathon_2023 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/3cd39fc9-362b-4579-a23f-42c3f5e861b9.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/3ff0040e-94f9-4f71-9183-0838f67fe5d9.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_2048.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_9357.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_9410.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_9412.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_9424.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_9519.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/IMG_9529.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-08-31-22-20-18.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-02-26-12.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-04-09-18.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-05-08-30.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-05-08-32.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-05-08-33.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-05-08-34.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-01-05-08-35.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-03-01-48-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-03-12-47-59.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-03-12-49-34%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-03-12-49-34.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/PHOTO-2023-09-03-12-54-58.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.44%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.44%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.45.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2023/WhatsApp%20Image%202024-03-05%20at%2012.10.46.jpeg',
  ];

  satara_marathon_2024 = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_2036.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_2044.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_9137.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_9193.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_9228.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_9238.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/IMG_9240.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-29-18-39-07.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-29-18-39-17.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-29-18-53-37.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-29-22-26-32%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-29-22-26-32.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-09%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-09%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-09.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-10%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-10.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-11.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-15%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-15%204.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-16%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-16.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-17.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-20%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-20%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-20%204.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-30-20-19-20.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-31-16-52-47%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-31-16-52-47.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-31-23-30-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-31-23-30-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-08-31-23-42-02.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-01-47-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-03-13-52.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-03-43-04.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-48.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-50%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-51%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-51.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-52.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-05-19-53.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/2024/PHOTO-2024-09-01-07-12-03.jpg'
  ];

  tata_mumbai_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/17dbebba-1fe6-4bb5-865a-ce5015cf3dde.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/28db06ee-b434-4fc4-8726-14aaa379d957.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/29f58cc2-816c-41f2-b512-17aab85ce79c.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/588eabb1-4f3c-4c40-9bc7-3b6a23e82961.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/67f2c098-0bf9-4f6a-9323-8b2b989b64f7%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/69e3c5e4-947b-4ca2-b72e-a2371c20c7b4.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/7cc39046-99a8-44c7-bd9a-35666d1c7ca0.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_0274.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_0367.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_0370.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_1743.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_1997.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_1999.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2004.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_20190120_095329730.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2970.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2971.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2972.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2973%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2973.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2976.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2977.PNG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2978.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2979.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2980.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2981.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2982.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2983.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2984.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2985.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2986.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2987.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2988.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2989.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2990.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2991.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2992.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2993.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2994.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2995(1).jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_2995.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8523.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8613.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8614.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8615.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8616.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8618.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8621.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8629.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8630%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8800.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8801.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8802.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8803.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_8804.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_9709.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/IMG_9725.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/WhatsApp%20Image%202024-03-05%20at%2012.11.00%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/WhatsApp%20Image%202024-03-05%20at%2012.11.00.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/WhatsApp%20Image%202024-03-05%20at%2012.11.03.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/f0dcef61-ab33-4f59-8d03-e0361499fa84.JPG'
  ];

  tata_challenge = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/IMG_0014.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/IMG_0018.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/IMG_0020.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/IMG_0054.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/IMG_0066.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/IMG_9998.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-13-01-00-24%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-13-09-33-29%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-13-09-34-46%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-14-02-05-07%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-14-18-41-14%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-08-03-16%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-08-03-18%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-08-03-19%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-08-03-20%203.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-08-03-20%204.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-09-28-48%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-21-02-59%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-21-03-01%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-21-03-02%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-21-18-56%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/2024/PHOTO-2024-09-15-21-18-57%202.jpg',
  ];

  tata_steel_kolkata = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_0238.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_0241.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_0242.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_0244.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_1776.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_1781.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_1782.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_1786.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_3094.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_3096.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_3099.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_3100.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_3102.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_3103.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_8611.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_8612.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_8643.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/IMG_9726.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/c34522f3-b026-4342-82f4-1a883fe3a817.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/ed84f2ba-7842-4c1b-a3e3-45923ed2ff36.jpg'
  ];

  tata_fit_life = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/12a75983-87ca-4a0f-a740-db178e75527b.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/1be425a8-f8d6-45c2-b522-907563b6be11.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/1f2fbcfb-385f-4f0a-bb85-ab002157f87c.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/212333dd-b760-461a-8137-c910966d2948.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/3438f79a-1b46-4632-a04e-52d43307e254.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/41b9caa2-a82f-4b5f-8f08-c4ce611680ee.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/439236aa-3286-4633-8bdb-d95f41cea050.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/45252ccd-037f-4707-97e2-7de3079f5572.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/45cc4026-8ea7-4b7e-b69e-02305066f7d1.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/46633df0-bbd1-4173-b0e5-06beb6a3879c.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/5646e938-99c0-4ffa-897f-1d77e9e8f9b9.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/67fb91d2-0d7d-4473-bbc9-04cd3b6908dd.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/693ecb55-2e46-4b42-8523-d118f97b810c.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/710c3024-cb0f-479d-8620-05c40646b8fe.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/9142bde8-7158-4930-840c-1a127d70fa2e.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_7211.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_7212.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_7214.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_8497.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_8598.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_8599.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/IMG_8601.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-02-18-20-39-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-08-56-39%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-08-56-39.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-08-56-40.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-08-56-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-08-56-42.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-08-58-43.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/PHOTO-2024-06-01-09-00-55.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-16%20at%2008.43.20.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-16%20at%2008.43.21.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-18%20at%2002.11.59.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-18%20at%2020.39.12.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-29%20at%2012.53.06.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-29%20at%2012.53.07%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-29%20at%2012.53.07.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/WhatsApp%20Image%202024-02-29%20at%2012.53.09.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/bb1a9aaa-0354-4469-9c3b-3e0a2c0557b3.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/c67f5e07-cc0e-45d7-99c5-3792abad1baf.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/c7e0c554-ea5c-4ab5-9bd2-a5344d5877a8.JPG'
  ];

  tcs_world_bengaluru = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/091c69f1-f335-4466-8e5c-c3da06e1a270.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/0d54e450-ddcc-437e-b82e-3cd16cda139d.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/0ea41c92-8d38-4f51-b053-f3a80a96b417.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/1b387845-f60a-4157-b95d-696dd70597dc.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/2ae844c2-adbe-4fa6-9b3a-db831e5e30ed.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/37e3880e-12eb-42ec-acc1-cfd04842aa8f%20copy.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/37ee6e9c-944c-4b2d-bbc2-31f91fb1d1ad.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/44577390-3c50-499a-821c-e23270bb0e91.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/5296dac6-44a1-421c-8cb5-1864d861ca0e.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/5d30bc42-5a02-49cb-853d-fe6ec1bfe364.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/6b808729-334b-46a8-811d-752d2efdeec4.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/7d388905-1a8e-48ae-8f01-9ff18beec510.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/94ef7a47-3d60-4915-a558-455a3cd71cd4.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_1750.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3018%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3018.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3019.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3020.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3025.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3026.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3028.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3031.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3032.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3034.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3035.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3036.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3091.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3092.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3093.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_3252.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/IMG_8638.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/a884468c-ec69-4183-a361-61394be15bb4.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/d40da474-8fc3-4184-a6b6-c76b8495e5aa.JPG'
  ];

  usb_athletic_cup = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7106.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7115%202.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7118.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7135.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7139.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7141.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7144.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7186.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7191.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7195.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7465.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_7479.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_9740.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_9741.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_9745.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_9751.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_9761.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/IMG_9767.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.55%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.55.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.56.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.57.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.58%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.58%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.58.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2012.59.59.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2013.00.00%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/2024/WhatsApp%20Image%202024-03-05%20at%2013.00.00.jpeg'
  ];

  wnc_navy_marathon = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_0285.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_8760.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_8807.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9668.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9691.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9717.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9718.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9719.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9724.JPG',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/IMG_9727.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-08-22-12-23-57.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-11-07-48-11%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-11-07-48-11.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-11-07-48-12.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-11-07-48-13.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-11-07-48-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-19-09-38-09.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-02-11-42.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-02-28-51.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-03-23-23.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-04-07-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-05-56-12.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-15-30-20%202.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/PHOTO-2022-11-20-15-30-20.jpg',
    // 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/WNC%202023.mp4',
    // 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/WNC%20NAVY%2023.mp4',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/WhatsApp%20Image%202024-03-05%20at%2012.10.56%20(2).jpeg',
  ];

  world_coffee_conference = [
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_0589.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_0625.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_0655.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_0657.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_0662.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_0666.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_2960.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/IMG_2961.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-23-16-04-56.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-23-17-21-47.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-24-16-23-25.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-08-41-16.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-08-43-41.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-08-44-38.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-10-59-14.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-10-59-15.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-10-59-17.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-10-59-18.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-10-59-50.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/PHOTO-2023-09-25-10-59-56.jpg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.04.58%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.04.58%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.04.58%20(3).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.04.59.jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.05.00%20(1).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.05.00%20(2).jpeg',
    'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/WhatsApp%20Image%202024-03-05%20at%2012.05.01.jpeg',
  ];

  works = [
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/27th%20National%20Conference%20on%20E-%20Governance/Title%20Image/Copy%20of%20IMG_9436.JPG',
      title: '27th National Conference on E-Governance',
      gallery: this.national_conference
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/CAN%20RUN/Main%20Photo/Copy%20of%20PHOTO-2023-03-05-03-06-03.jpg',
      title: 'Can Run',
      gallery: this.can_run
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Invincible%20Women/Main%20Photo/Copy%20of%20IMG_9675.jpg',
      title: 'Invincible Women',
      gallery: this.invincible_women
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/PINKATHON/Main%20Photo/Copy%20of%20colors-pinkathon_1556010870.jpg',
      title: 'Pinkathon',
      gallery: this.pinkathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/JSW%20Squash%20League/Main%20Photo/Copy%20of%209d846c6e-c173-4581-85e7-867ccdce38c0.JPG',
      title: 'JSW Squash League',
      gallery: this.jsw_squash
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%2010K%20CHALLENGE/Main%20Photo/Copy%20of%20PHOTO-2024-07-01-14-51-31.jpg',
      title: 'Bengaluru 10k Challenge',
      gallery: this.Bengaluruchallenge
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AMAZON%20RUN%202023/Title%20Image/WhatsApp%20Image%202024-03-05%20at%2012.10.43%20(1).jpeg',
      title: 'Amazon Run 2023',
      gallery: this.amazonrun
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BAJAJ%20ALLIANZ%20PUNE%20HALF%20MARATHON/Title%20Image/Copy%20of%20IMG_8799.JPG',
      title: 'Bajaj Allianz Pune Half Marathon',
      gallery: this.bajaj_pune_marathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/LOLLAPALOOZA/Main%20Photo/Copy%20of%20IMG_6782.jpg',
      title: 'Lollapalooza',
      gallery: this.lollapalooza
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/ONE8%20RUN%20BENGALURU/Main%20photo/Copy%20of%20IMG_8686.jpg',
      title: 'ONE8 Run Bengaluru',
      gallery: this.one_run_bengaluru
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Indian%20Navy%20Mumbai%20Heritage%20Run/Main%20Photo/Copy%20of%20WhatsApp%20Image%202024-03-05%20at%2012.10.54%20(3).jpeg',
      title: 'Indian Navy Mumbai Heritage Run',
      gallery: this.indian_navy
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Jio%20Mumbai%20Cyclothon/Main%20Photo/Copy%20of%20IMG_5330.jpg',
      title: 'Jio Mumbai Cyclothon',
      gallery: this.jio_mumbai
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/IOCL%20SHIVAJI%20TRIATHLON/Main%20Photo/Copy%20of%209a88a204-7c9e-4f09-878f-5846cb33dcba(1).JPG',
      title: 'IOCL Shivaji Triathlon',
      gallery: this.iocl_shivaji_triathlon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/AIRTEL%20DELHI%20HALF%20MARATHON/Title%20photo/Copy%20of%20IMG_0363.jpg',
      title: 'Airtel Delhi Half Marathon',
      gallery: this.delhi_marathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/G20%20DIA%20SUMMIT/Main%20photo/Copy%20of%20PHOTO-2023-08-17-09-12-01.jpg',
      title: 'G20 Dia Summit',
      gallery: this.gdiasummit
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WNC%20NAVY%20HALF%20MARATHON/Main%20Photo/Copy%20of%20IMG_9724.JPG',
      title: 'WNC Navy Half Marathon',
      gallery: this.wnc_navy_marathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20STEEL%20KOLKATA%2025K/Main%20Photo/Copy%20of%20IMG_0238.jpg',
      title: 'Tata Steel Kolkata 25K',
      gallery: this.tata_steel_kolkata
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/KOLKATA%20FULL%20MARATHON/Main%20photo/Copy%20of%20PHOTO-2023-02-04-23-34-11.jpg',
      title: 'Kolkata Full Marathon',
      gallery: this.kolkata_marathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20MUMBAI%20MARATHON/Main%20Photo/Copy%20of%20IMG_2973.JPG',
      title: 'Tata Mumbai Marathon',
      gallery: this.tata_mumbai_marathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/BENGALURU%20TECH%20SUMMIT/Main%20photo/Copy%20of%20WhatsApp%20Image%202024-03-05%20at%2012.04.53.jpeg',
      title: 'Bengaluru Tech Summit',
      gallery: this.Bengalurutech
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/INVESTMENT%20KARNATAKA%202022/Main%20Photo/Copy%20of%20IMG_0284.jpg',
      title: 'Investment Karnataka 2022',
      gallery: this.investmentkarnatak
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20WORLD%2010K%20BENGALURU/Main%20Photo/Copy%20of%207d388905-1a8e-48ae-8f01-9ff18beec510.JPG',
      title: 'TCS World 10K Bengaluru',
      gallery: this.tcs_world_bengaluru
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/WORLD%20COFFEE%20CONFERENCE/Main%20Photo/Copy%20of%20IMG_0657%20(1).jpg',
      title: 'World Coffee Conference',
      gallery: this.world_coffee_conference
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAHARASHTRA%20POLICE%20INTERNATIONAL%20MARATHON/Main%20Photo/Copy%20of%20427af27c-2a22-4c0a-a04c-a455da7ecd32%202.JPG',
      title: 'Maharastra Police International Marathon',
      gallery: this.maharastra_police_marathon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TCS%20FIT%204%20LIFE/Main%20Photo/Copy%20of%209142bde8-7158-4930-840c-1a127d70fa2e.JPG',
      title: 'TCS Fit 4 Life',
      gallery: this.tata_fit_life
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Himalaya%20walkatahon/Main%20Photo/Copy%20of%20IMG_0424.JPG',
      title: 'Himalaya Walkatahon',
      gallery: this.himalaya_walkatahon
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Ageas%20Federal%20Mumbai%20Half%20Marathon/Title%20Image/Copy%20of%20IMG_3151.jpg',
      title: 'Ageas Federal Mumbai Half Marathon',
      gallery: [
        { year: "2024", photos: this.mumbai_marathon_2024 },
        { year: "2023", photos: this.mumbai_marathon_2023 }
      ]
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/MAZDOCK%2010K%20CHALLENGE%202024/Main%20Photo/Copy%20of%20PHOTO-2024-12-15-09-13-23.jpg',
      title: 'Mazdock 10K Challenge 2024',
      gallery: [
        { year: "2025", photos: this.mazdock_challege_2025 },
        { year: "2024", photos: this.mazdock_challege_2024 }
      ]
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HPCL%202024/Main%20photo/Copy%20of%20PHOTO-2024-12-08-10-50-10.jpg',
      title: 'HPCL 2024',
      gallery: this.hpcl
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/HIRANANDANI%20THANE%20HALF%20MARATHON/Main%20Photo/Copy%20of%20IMG_9181.JPG',
      title: 'Hiranandani Thane Half Marathon',
      gallery: [
        { year: "2025", photos: this.hiranandani_marathon_2025 },
        { year: "2024", photos: this.hiranandani_marathon_2024 }
      ]
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/APOLLO%20TYRES%20NEW%20DELHI%20MARATHON/Title%20Image/Copy%20of%20IMG_3108.jpg',
      title: 'Apollo Tyres New Delhi Marathon',
      gallery: [
        { year: "2024", photos: this.apollo_tyres_marathon_2024 },
        { year: "2023", photos: this.apollo_tyres_marathon_2023 }
      ]
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/FAST%20&%20UP%20MUMBAI%20WALKATHON/Main%20Photo/Copy%20of%20IMG_1932.JPG',
      title: 'Fast & Up Mumbai Walkathon',
      gallery: this.fastandupmumbai
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/TATA%20SOCIAL%20ENTERPRISE%20CHALLENGE/Main%20photo/Copy%20of%20PHOTO-2024-09-15-21-18-56%202.jpg',
      title: 'Tata Social Enterprise Challenge',
      gallery: this.tata_challenge
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/SATARA%20HILL%20HALF%20MARATHON/Main%20Photo/Copy%20of%20IMG_2036.jpg',
      title: 'Satara Hill Half Marathon',
      gallery: [
        { year: "2024", photos: this.satara_marathon_2024 },
        { year: "2023", photos: this.satara_marathon_2023 }
      ]
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/UBS%20Athletic%20Kids%20Cup/Main%20Photo/Copy%20of%20IMG_7139.JPG',
      title: 'USB Athletic Kids Cup',
      gallery: this.usb_athletic_cup
    },
    {
      img: 'https://websitemetadata.blob.core.windows.net/website/4.%20Our%20Events%20-%20Photos/Our%20work/1.%20FINAL%20WORK%20(Azure)/Bajaj%20Indef%20Thane%20Marathon/Main%20photo/Copy%20of%20PHOTO-2024-08-18-04-43-24.jpg',
      title: 'Bajaj Indef Thane Marathon',
      gallery: this.bajaj_thane_marathon
    },

  ];

  activeIndex = 0;
  prevIndex = this.images.length - 1;
  nextIndex = 1;
  intervalId: any;
  selectedTitle: string = ''; 

  constructor(private eventsReset: EventsResetService) { }

  ngOnInit() {
    this.startCarousel();
    this.eventsReset.reset$.subscribe(() => {
      this.resetEventsState();
    });
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
      this.prevIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
      this.nextIndex = (this.activeIndex + 1) % this.images.length;
    }, 3000);
  }

  openGallery(work: any) {
    this.selectedWork = work;
    this.selectedGallery = work.gallery;
    this.selectedTitle = work.title;
    this.isYearWise = Array.isArray(work.gallery) && typeof work.gallery[0] === "object";
    this.showGallery = true;
  }
  
  openImageCarousel(images: string[]) {
    this.selectedGallery = images;
    this.currentCarouselIndex = 0;
    this.showGallery = false;
    this.showCarousel = true;
  }

  goBackToGallery() {
    this.showCarousel = false;
    this.showGallery = true;
  }

  updateCarouselIndex(direction: 'prev' | 'next') {
    if (direction === 'next') {
      this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.selectedGallery.length;
    } else {
      this.currentCarouselIndex = (this.currentCarouselIndex - 1 + this.selectedGallery.length) % this.selectedGallery.length;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  resetEventsState() {
    this.showGallery = false;
    this.showCarousel = false;
    this.selectedGallery = [];
    this.selectedTitle = '';
    this.currentCarouselIndex = 0;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
