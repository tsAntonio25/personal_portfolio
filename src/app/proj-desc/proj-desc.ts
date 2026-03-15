import { Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-proj-desc',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './proj-desc.html',
  styleUrl: './proj-desc.css',
})
export class ProjDesc implements OnInit {
  @Input() set mode(value: string) {
    this.isDarkMode = (value === 'dark');
  }

  isDarkMode: boolean = false; 

  private route = inject(ActivatedRoute);
  
  projects = [
    {
      imgpic: '/assets/images/softwareg-site.png',
      name: "SoftwareG: A Digital Printing Service Business Website",
      desc: 'SoftwareG is a high-performance static website designed to bridge the gap between a small printing business and its digital-native clientele. By leveraging the fundamentals of the web stack (HTML/CSS/JS), the project delivers a polished, responsive interface that showcases various printing services, from large-format banners to bespoke stationery. The site prioritizes clean typography and intuitive navigation to streamline the customer inquiry process.',
      tech: 'HTML, CSS, JavaScript',
      repo: 'https://github.com/tsAntonio25/softwareG',
      site: 'https://tsantonio25.github.io/softwareG/index.html', 
      contributions: [
        'Applied Responsive Design to support multiple viewports',
        'Catered web design to the business’ brand identity',
        'Built a mockup design for different viewports using Figma',
        'Deployed the Website using GitHub Page']
    },
    {
      imgpic: '/assets/images/the-garage-website.png',
      name: "The Garage: Car Rental Service Website",
      desc: 'The Garage is an online car rental system that aims to provide its customers with an easy and efficient car rental process. Instead of visiting rental shops in person and going through paperworks and long queues, users can see all available cars, rent a vehicle of their choice, and pay all through the website. The Garage includes functionalities such as  real-time car availability and easy booking management. It can also manage its database efficiently using the Admin Dashboard. The Garage improves on the rental experience by making the car rental processes easier for both customers and business owners.',
      tech: 'HTML, CSS, JavaScript, PHP, MariaDB',
      repo: 'https://github.com/tsAntonio25/website-dweb',
      site: '',
      contributions: [
        'Developed a responsive car rental web application enabling users to register accounts, browse vehicles, and make rental reservations.',
        'Implemented full CRUD operations for vehicle listings, user accounts, and rental transactions using PHP.',
        'Designed and normalized the relational database schema up to Third Normal Form (3NF) to ensure data integrity and minimize redundancy.',
        'Integrated MariaDB for reliable data storage and efficient query processing.',
        'Built an admin dashboard to manage users, vehicle listings, and rental records.',
        'Led a team of four by assigning tasks based on individual responsibilities and coordinating development efforts.',
        'Maintained consistent communication within the team to ensure smooth project progress and timely completion.'
      ]
    },
    {
      imgpic: '/assets/images/iponly-webapp.png',
      name: "Iponly: Gamified Budget Tracker Web App",
      desc: 'A gamified budget management web application specifically designed for the School of Computing (SOC) students of Holy Angel University. Unlike traditional finance tracker applications, the system integrates gamification elements such as Experience Points (EXP), streaks, and leaderboards. These features are expected to increase student engagement by motivating them to maintain streaks, and compete on the leaderboard against other students. This project aims to address Financial literacy, Low motivation to save money and Inconsistent usage of financial management applications.',
      tech: 'Vue.js, TailwindCSS, Node.js, Express.js, MongoDB',
      repo: 'https://github.com/tsAntonio25/6WCSERVER-Final-Project',
      site: 'https://iponly.vercel.app/',
      contributions: [
        'Developed a gamified platform to help college students manage daily expenses interactively.',
        'Implemented pie charts and bar graphs using Chart.js to visualize user financial data.',
        'Built RESTful APIs with Node.js and Express to handle frontend-backend data routing.',
        'Integrated MongoDB for efficient storage and retrieval of user financial records.',
        'Applied responsive web design principles to ensure usability across multiple screen sizes and devices.',
        'Implemented JSON Web Tokens (JWT) for secure user authentication and authorization.',
        'Designed and developed an admin dashboard to manage user accounts and enforce role-based access control.',
        'Led a team of four using Agile Scrum methodology to plan, track, and deliver project milestones on time.',
        'Coordinated task delegation based on individual roles and maintained clear communication throughout development.'
      ]
    },
    {
      imgpic: '/assets/images/green-canyon-website.png',
      name: 'Green Canyon Leisure Farms Resort Website',
      desc: 'Grand Canyon is a sophisticated digital platform built to elevate the online presence of high-end hospitality. Developed using the Angular framework, the site replaces traditional page reloads with a continuous, elegant flow. The project focuses on "Atmospheric UX", using clean layouts, bold typography, and optimized asset delivery to convert casual visitors into potential guests. It serves as a showcase of how modern web frameworks can be used to deliver both high-end aesthetics and enterprise-grade performance.',
      tech: 'Angular, Bootstrap 5',
      repo: 'https://github.com/tsAntonio25/prelim-project-grand-canton',
      site: 'https://prelim-project-grand-canton.netlify.app/',
      contributions: [
        'Led a team of 4 and coordinated tasks distribution',
        'Provided the Repository and Supervised the Production',
        'Built Employee Directory Page and its Functionality',
        'Deployed the Website with Netlify']
    },
    {
      imgpic: '/assets/images/steam-news-website.png',
      name: "Daily Gaming: Steam News Website",
      desc: 'Daily Gaming is a dynamic news hub that provides gamers with up-to-the-minute updates for their favorite titles. By integrating the Steam Web API with the Next.js framework, the platform offers a lightning-fast alternative to traditional news sites. The project showcases the power of Single-Page Applications to handle complex, external data sets with minimal latency and maximum visual impact.',
      tech: 'Next.js, TailwindCSS',
      repo: 'https://github.com/tsAntonio25/digital-game-news',
      site: '',
      contributions: [
        'Personal Project for Learning Next.js along with TailwindCSS',
        'Used SteamAPI to fetch game related news',
        'Created a Wireframe for guide in web design']
    }
  ];

  showproj: any = null;

  ngOnInit() {
    window.scrollTo(0, 0);

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      const index = Number(id);
      this.showproj = this.projects[index];
      console.log('Project Data:', this.showproj);
    }
  }
}