import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeIndex = 2;

  projects: any = [
    {
      imagepic: '/assets/images/softwareg-site.png',
      title: 'SoftwareG: A Digital Printing Service Business Website',
      desc: 'A responsive static website designed for a digital printing business to showcase services and streamline customer inquiries.',
      techstack: 'HTML, CSS, JavaScript',
      repolink: 'https://github.com/tsAntonio25/softwareG'
    },
    {
      imagepic: '/assets/images/the-garage-website.png',
      title: 'The Garage: Car Rental Service Website',
      desc: 'A car rental management system featuring full CRUD functionality to manage vehicle inventory and bookings via a centralized database.',
      techstack: 'HTML, CSS, JavaScript, PHP, MySQL',
      repolink: 'https://github.com/tsAntonio25/website-dweb'
    },
    {
      imagepic: '/assets/images/iponly-webapp.png',
      title: 'Iponly: Gamified Budget Tracker Web App',
      desc: 'A secure budget tracking application featuring real-time data visualization with Chart.js and robust user authentication using JWT and Bcrypt.',
      techstack: 'Vue.js, TailwindCSS, Node.js, Express.js, MongoDB',
      repolink: 'https://github.com/tsAntonio25/6WCSERVER-Final-Project'
    },
    {
      imagepic: '/assets/images/green-canyon-website.png',
      title: 'Green Canyon Leisure Farms Resort Website',
      desc: 'A visually immersive static landing page for a luxury resort, optimized for high-performance and modern UI/UX standards.',
      techstack: 'Angular, Bootstrap 5',
      repolink: 'https://github.com/tsAntonio25/prelim-project-grand-canton'
    },
    {
      imagepic: '/assets/images/steam-news-website.png',
      title: 'Daily Gaming: Steam News Website',
      desc: 'A dynamic gaming news platform that integrates REST APIs to deliver real-time data and updates directly from the Steam API.',
      techstack: 'Next.js, TailwindCSS',
      repolink: 'https://github.com/tsAntonio25/digital-game-news'
    },
  ]

  next() {
    if (this.activeIndex < this.projects.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; 
    }
  }

  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.projects.length - 1; 
    }
  }

  getTransform() {
  const isMobile = window.innerWidth < 768;
  const slideWidth = isMobile ? 296 : 382; 
  
  const offset = (this.activeIndex * slideWidth);
  const centering = ( (this.projects.length - 1) * (slideWidth / 2) );
  
  return `translateX(calc(-50% - ${offset}px + ${centering}px))`;
}

}
