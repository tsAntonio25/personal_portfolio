import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {

  certificates: any = [
    {
      imgpic: '',
      title: '',
      desc: '',
      link: ''
    }
  ]

}
