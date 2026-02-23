import { Component, signal, ElementRef, inject, Renderer2, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intro } from "./intro/intro";
import { About } from "./about/about";
import { TechSkills } from "./tech-skills/tech-skills";
import { SoftSkills } from "./soft-skills/soft-skills";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { FeaturedProjects } from "./featured-projects/featured-projects";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Intro, About, TechSkills, SoftSkills, Projects, Contact, FeaturedProjects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal_portfolio');
  protected currentBg = signal({ start: '#0f172a', end: '#1e293b' });
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {
    afterNextRender(() => {
      this.initScrollObserver();
    });
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
          const id = entry.target.id;

          if (id === 'intro') this.currentBg.set({ start: '#0E113B', end: '#6800AB' });
          if (id === 'featured') this.currentBg.set({ start: '#231B45', end: '#310F8A' });
          if (id === 'about') this.currentBg.set({ start: '#0F0F26', end: '#0023AD' });
          if (id === 'tech') this.currentBg.set({ start: '#16275E', end: '#150B73' });
          if (id === 'soft') this.currentBg.set({ start: '#231B45', end: '#310F8A' });
          if (id === 'certs') this.currentBg.set({ start: '#231B45', end: '#310F8A' });
          if (id === 'projects') this.currentBg.set({ start: '#1e3a8a', end: '#1E0D45' });
          if (id === 'contact') this.currentBg.set({ start: '#131345', end: '#2e1065' });
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