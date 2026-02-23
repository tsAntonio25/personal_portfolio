import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;

  socmeds: any = [
    {
      icon: 'fa-brands fa-facebook',
      name: 'Facebook',
      hoverstyle: 'hover:text-blue-600 transition-transform hover:-translate-y-1'
    },
    {
      icon: 'fa-brands fa-linkedin',
      name: 'LinkedIn',
      hoverstyle: 'hover:text-blue-700 transition-transform hover:-translate-y-1'
    },
    {
      icon: 'fa-brands fa-github',
      name: 'GitHub',
      hoverstyle: 'hover:text-white transition-transform hover:-translate-y-1'
    },
    {
      icon: 'fa-solid fa-envelope',
      name: 'Gmail',
      hoverstyle: 'hover:text-red-600 transition-transform hover:-translate-y-1'
    },
  ];

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email1': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); 
      return;
    }

    const SERVICE_ID = 'service_a6bu0cd';
    const TEMPLATE_ID = 'template_6o4j5fi';
    const PUBLIC_KEY = 'D0HT9v3ZljMraHTJu';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        this.contactForm.reset(); 
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
      });
  }
}