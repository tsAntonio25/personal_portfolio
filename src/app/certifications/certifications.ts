import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {

  @Input() isDarkMode: boolean = true;

  certificates: any = [
    {
      imgpic: '/assets/images/fcc-responsive-design.png',
      title: 'Legacy Responsive Web Design V8',
      date: 'July, 20, 2024',
      link: 'https://www.freecodecamp.org/certification/tsantonio_25/responsive-web-design'
    },
    {
      imgpic: '/assets/images/fcc-backend.png',
      title: 'Backend Development and APIs V8',
      date: 'October, 01, 2025',
      link: 'https://www.freecodecamp.org/certification/tsantonio_25/back-end-development-and-apis'
    },
    {
      imgpic: '/assets/images/fcc-js.png',
      title: 'Legacy JavaScript Algorithms and Data Structures V7',
      date: 'October, 01, 2025',
      link: 'https://www.freecodecamp.org/certification/tsantonio_25/javascript-algorithms-and-data-structures'
    },
  ]

}
