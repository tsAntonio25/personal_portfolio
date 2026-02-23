import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tech-skills',
  imports: [CommonModule],
  templateUrl: './tech-skills.html',
  styleUrl: './tech-skills.css',
})
export class TechSkills {

  frontend: any = [
    {
      icon: 'fa-brands fa-html5',
      name: 'HTML'
    },
    {
      icon: 'fa-brands fa-css3-alt',
      name: 'CSS'
    },
    {
      icon: 'fa-brands fa-js',
      name: 'JavaScript'
    },
    {
      icon: 'fa-brands fa-typescript',
      name: 'TypeScript'
    },
    {
      icon: 'fa-brands fa-tailwind-css',
      name: 'TailwindCSS'
    },
    {
      icon: 'fa',
      name: 'Bootstrap 5'
    },
    {
      icon: 'fa-brands fa-vuejs',
      name: 'Vue.JS'
    },
    {
      icon: 'fa-brands fa-angular',
      name: 'Angular'
    },
  ]

  backend: any = [
    {
      icon: 'fa-brands fa-node-js',
      name: 'Node.JS'
    },
    {
      icon: 'fa',
      name: 'Express.JS'
    },
    {
      icon: 'fa-brands fa-php',
      name: 'PHP'
    },
    
  ]

  database: any = [
    {
      icon: 'fa-solid fa-database',
      name: 'MySQL'
    },
    {
      icon: 'fa',
      name: 'MariaDB'
    },
    {
      icon: 'fa',
      name: 'MongoDB'
    },
  ]

  tools: any = [
    {
      icon: 'fa-brands fa-figma',
      name: 'Figma'
    },
    {
      icon: 'fa-brands fa-git-alt',
      name: 'Git'
    },
    {
      icon: 'fa-brands fa-github',
      name: 'GitHub'
    },
    {
      icon: 'fa',
      name: 'PostMan'
    },
    {
      icon: 'fa',
      name: 'Visual Studio Code'
    },
  ]
}
