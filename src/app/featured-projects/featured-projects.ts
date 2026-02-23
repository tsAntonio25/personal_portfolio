import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.css',
})
export class FeaturedProjects implements OnInit, OnDestroy {

  @Input() isDarkMode: boolean = true;

  currentIndex = 0;
  intervalId: any;

  projects: any = [
    {
      img: '/assets/images/iponly-webapp.png',
      title: 'Iponly: Gamified Budget Tracker Web App',
      desc: 'A secure budget tracking application featuring real-time data visualization with Chart.js and robust user authentication using JWT and Bcrypt.',
      techstack: 'Vue.js, TailwindCSS, Node.js, Express.js, MongoDB',
      link: 'https://github.com/tsAntonio25/6WCSERVER-Final-Project'
    },
    {
      img: '/assets/images/the-garage-website.png',
      title: 'The Garage: Car Rental Service Website',
      desc: 'A car rental management system featuring full CRUD functionality to manage vehicle inventory and bookings via a centralized database.',
      techstack: 'HTML, CSS, JavaScript, PHP, MySQL',
      link: 'https://github.com/tsAntonio25/website-dweb'
      
    }
  
  ]
  

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 5000)
  }

  nextSlide() {
    this.currentIndex = this.currentIndex === 0 ? 1 : 0;
  }

  setSlide(index: number) {
    this.currentIndex = index;
    this.cdr.detectChanges()
    clearInterval(this.intervalId);
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
