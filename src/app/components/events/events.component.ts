import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  showGallery = false;
   showCarousel = false;
  selectedWork: any = null;
  selectedGallery: string[] = [];
   currentCarouselIndex = 0; 

  images: string[] = [
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/0ea41c92-8d38-4f51-b053-f3a80a96b417.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/3564b599-751e-423d-8b8c-3e3d8f14b316.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/8aa30067-c1e5-469a-ae8e-43d64ec58941.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_0967.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2038.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_1287.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2060.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2769.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2973.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_2989.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_3017.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_3106.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_3138.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_5002.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_5022.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_5663.jpg',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_6317.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_6867.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/IMG_9132.JPG',
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Event%20Top%20Photos/fbd5e215-02f1-492c-8234-ff7575a2ec5a.JPG'
  ];

  amazonrun = [
   'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/IMG_6292.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-02(1).jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-02.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-04.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-42-05.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-13.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-14(1).jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-14.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-15(1).jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-15.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-16.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-17(1).jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/PHOTO-2023-09-09-07-45-17.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/WhatsApp%20Image%202024-03-05%20at%2012.10.43%20(2).jpeg',
  ];

  Bengalurutech = [
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/13d10f45-3b8c-47c1-80cd-29a27a23eae7.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/IMG_2909.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/IMG_2910%202.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/IMG_2923.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/IMG_2943.jpg',
// 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/IMG_4382.HEIC',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.53%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.53%20(2).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.54%20(2).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.54%20(3).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.55%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.55%20(2).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.55.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56%20(2).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56%20(3).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.56.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.57%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.57%20(3).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.58.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.59%20(3).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.05.00.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.11.02%20(1).jpeg'
  ];

   fastandupmumbai =[
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/01f25235-cdf3-4f5d-bdae-07a865ed7a88.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1039.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1733.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1736.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1741.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1766.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1814.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1820.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1879.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1922.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1923.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1925.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1930.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1939.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1950.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1962.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1971.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_2003.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_2012.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_2023%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/d4d77d28-47a3-4d46-9c2b-099da760ce51.JPG',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/e1f4b342-8f19-4cad-9a41-6f2f72516bff.JPG'
  ];

  gdiasummit =[
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-16-23-54-23%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-01-07-20.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-01-07-34.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-01-08-02.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-03-03-04.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-10-57.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-10-58.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-11-31.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.50%20(2).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.51.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.52.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.54%20(1).jpeg'
  ];

  hpcl =[
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-02-01-39%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-02-01-39%203.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-02-01-39.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-03-40-48%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-03-40-48%203.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-03-40-48%204.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-03-40-48.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-10-50-10%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-13-47-48.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-13-47-49%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-13-47-49.jpg'
  ];

  investmentkarnatak = [
    'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/IMG_0283.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/IMG_2117.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-10-29-23-31-23.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-11-24-43.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-11-24-44.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-12-37-30.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-19-34-03.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-01-22-28-41.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-00-31-50.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-08-00-05.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-11-25-28%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-11-25-28.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/PHOTO-2022-11-02-19-31-01.jpg'
  ];

  lollapalooza =[
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/IMG_6785.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/IMG_9683.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2023-01-26-17-26-31.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2023-01-26-18-13-48.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2023-01-26-21-22-25.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2023-01-27-00-24-34.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2024-01-26-17-46-48%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2024-01-27-00-03-00.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2024-01-27-00-18-35.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2024-01-27-05-13-01.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2024-01-27-05-33-32%202.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/PHOTO-2024-01-27-09-16-07.jpg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.30%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.30.jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.40%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.58%20(1).jpeg',
'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/WhatsApp%20Image%202024-03-05%20at%2012.10.58.jpeg'
  ]; 
  
  works = [
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/AMAZON%20RUN%202023/WhatsApp%20Image%202024-03-05%20at%2012.10.43%20(1).jpeg',
      title: 'AMAZON RUN 2023',
      gallery: this.amazonrun
    },
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/BENGALURU%20TECH%20SUMMIT/WhatsApp%20Image%202024-03-05%20at%2012.04.53.jpeg',
   title: 'BENGALURU TECH SUMMIT',
   gallery: this.Bengalurutech
    },
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/FAST%20&%20UP%20MUMBAI%20WALKATHON/IMG_1932.JPG',
      title: 'FAST & UP MUMBAI WALKATHON',
      gallery: this.fastandupmumbai
    },
    
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/G20%20DIA%20SUMMIT/PHOTO-2023-08-17-09-12-01.jpg',
      title: 'G20 DIA SUMMIT',
      gallery: this.gdiasummit
    },
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/HPCL%202024/PHOTO-2024-12-08-10-50-10.jpg',
      title: 'HPCL 2024',
      gallery: this.hpcl
    },
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/INVESTMENT%20KARNATAKA%202022/IMG_0284.jpg',
      title: 'INVESTMENT KARNATAKA 2022',
      gallery: this.investmentkarnatak
    },
    {
      img: 'https://graphics.blob.core.windows.net/graphics/4.%20Our%20Events%20-%20Photos/Our%20work/0.2%20FINAL%20WORK/LOLLAPALOOZA/IMG_6782.jpg',
      title: 'LOLLAPALOOZA',
      gallery: this.lollapalooza
      
    }
  ];

  
 
  activeIndex = 0;
  prevIndex = this.images.length - 1;
  nextIndex = 1;
  intervalId: any;
  selectedTitle: string='';

  ngOnInit() {
    this.startCarousel();
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
    this.selectedTitle= work.title;
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
  
}
