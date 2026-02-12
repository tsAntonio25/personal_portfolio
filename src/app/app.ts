import { Component, signal, ElementRef, inject, Renderer2, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intro } from "./intro/intro";
import { About } from "./about/about";
import { TechSkills } from "./tech-skills/tech-skills";
import { SoftSkills } from "./soft-skills/soft-skills";
import { Projects } from "./projects/projects";
import { EducExp } from "./educ-exp/educ-exp";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Intro, About, TechSkills, SoftSkills, Projects, EducExp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal_portfolio');
  protected currentBg = signal('bg-stone-400');
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
          console.log('Active Section:', id); 

          if (id === 'intro') this.currentBg.set('bg-cyan-900');
          if (id === 'about') this.currentBg.set('bg-cyan-950');
          if (id === 'skills') this.currentBg.set('bg-sky-950');
          if (id === 'projects') this.currentBg.set('bg-sky-800');
          if (id === 'edu-exp') this.currentBg.set('bg-sky-500');
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