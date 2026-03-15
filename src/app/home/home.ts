import { CommonModule,  } from '@angular/common';
import { Component, signal, ElementRef, inject, Renderer2, afterNextRender } from '@angular/core';
import { Intro } from '../intro/intro';
import { About } from '../about/about';
import { TechSkills } from '../tech-skills/tech-skills';
import { SoftSkills } from '../soft-skills/soft-skills';
import { Projects } from '../projects/projects';
import { Certifications } from '../certifications/certifications';
import { Contact } from '../contact/contact';
import { FeaturedProjects } from '../featured-projects/featured-projects';
import { Resume } from '../resume/resume';


@Component({
  selector: 'app-home',
  imports: [CommonModule, Intro, About, TechSkills, SoftSkills, Projects, Contact, FeaturedProjects, Certifications, Resume, ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = signal('personal_portfolio');
  
  protected isDarkMode = signal(true);
  
  protected currentBg = signal({ start: '#191423', end: '#000000' });
  
  private activeSectionId = 'intro';

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {
    afterNextRender(() => {
      this.initScrollObserver();
    });
  }

  protected toggleTheme() {
    this.isDarkMode.update(dark => !dark);
    this.updateBackground(this.activeSectionId);
  }

  private updateBackground(id: string) {
    this.activeSectionId = id;
    const isDark = this.isDarkMode();

    // dark mode bg colors
    const colorMap: Record<string, { start: string, end: string }> = isDark ? {
      'intro': { start: '#191423', end: '#16054A' },
      'featured': { start: '#1E054A', end: '#191423' },
      'about': { start: '#191423', end: '#17054A' },
      'tech': { start: '#26183B', end: '#191423' },
      'soft': { start: '#191423', end: '#29054A' },
      'certs': { start: '#231B45', end: '#191423' },
      'projects': { start: '#191423', end: '#1E0D45' },
      'contact': { start: '#131345', end: '#191423' },
      'resume': { start: '#191423', end: '#0F0B7D' }
    } : {
      // light mode bg colors
      'intro': { start: '#e1e1e1', end: '#E0D292' },
      'featured': { start: '#E6DBBC', end: '#e1e1e1' },
      'about': { start: '#e1e1e1', end: '#CCC087' },
      'tech': { start: '#EBDBAB', end: '#e1e1e1' },
      'soft': { start: '#e1e1e1', end: '#D9C496' },
      'certs': { start: '#F2E8AC', end: '#e1e1e1' },
      'projects': { start: '#e1e1e1', end: '#E8DCA7' },
      'contact': { start: '#EDE3B4', end: '#e1e1e1' },
      'resume': { start: '#e1e1e1', end: '#A3965D' }
    };

    if (colorMap[id]) {
      this.currentBg.set(colorMap[id]);
    }
  }

  private initScrollObserver() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          revealObserver.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    const revealTargets = this.el.nativeElement.querySelectorAll('.scroll-reveal');
    revealTargets.forEach((target: HTMLElement) => revealObserver.observe(target));

    const bgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.updateBackground(entry.target.id);
        }
      });
    }, { 
      threshold: 0.3, 
      rootMargin: '-20% 0px -20% 0px' 
    });

    const sections = this.el.nativeElement.querySelectorAll('section');
    sections.forEach((section: HTMLElement) => bgObserver.observe(section));
  }
}
