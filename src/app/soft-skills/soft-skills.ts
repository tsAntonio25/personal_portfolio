import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  imports: [CommonModule],
  templateUrl: './soft-skills.html',
  styleUrl: './soft-skills.css',
})
export class SoftSkills {

  @Input() isDarkMode: boolean = true;

  softskills: any = [
    {
      icon: 'fa-solid fa-ear-listen',
      title: 'Active Listening',
      desc: 'Demonstrates a strong ability to listen to project requirements and instructor feedback, accurately translating complex instructions into actionable development steps while retaining key technical details.'
    },
    {
      icon: 'fa-solid fa-users-gear',
      title: 'Project Coordination',
      desc: 'Proven track record of taking initiative in group assignments, guiding teammates through technical hurdles, and maintaining organized timelines to ensure high-quality project completion.'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Self-Learning',
      desc: 'Approaches coding challenges with a proactive mindset, utilizing documentation, debugging tools, and analytical thinking to resolve errors and optimize program logic independently.'
    },
    {
      icon: 'fa-solid fa-handshake-angle',
      title: 'Collaborative',
      desc: 'An effective team player who excels in collaborative environments, sharing knowledge and engaging in constructive peer reviews to improve collective code quality.'
    },
  ]
}
