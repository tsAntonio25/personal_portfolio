import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  @Input() isDarkMode: boolean = true;
}
