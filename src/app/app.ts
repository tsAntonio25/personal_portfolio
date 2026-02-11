import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intro } from "./intro/intro";
import { About } from "./about/about";
import { TechSkills } from "./tech-skills/tech-skills";
import { SoftSkills } from "./soft-skills/soft-skills";
import { Projects } from "./projects/projects";
import { EducExp } from "./educ-exp/educ-exp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Intro, About, TechSkills, SoftSkills, Projects, EducExp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal_portfolio');
}
