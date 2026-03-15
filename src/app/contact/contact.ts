import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
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

  @Input() isDarkMode: boolean = true;

  contactForm!: FormGroup;

  socmeds: any = [
    {
      icon: 'fa-brands fa-facebook',
      name: 'Facebook',
      hoverstyle: 'hover:text-blue-600 transition-transform hover:-translate-y-1',
      link: 'https://www.facebook.com/trishia.antoniolololol/'
    },
    {
      icon: 'fa-brands fa-linkedin',
      name: 'LinkedIn',
      hoverstyle: 'hover:text-blue-400 transition-transform hover:-translate-y-1',
      link: 'https://www.linkedin.com/in/trishia-mae-antonio-1b1033298/'
    },
    {
      icon: 'fa-brands fa-github',
      name: 'GitHub',
      hoverstyle: 'hover:text-white transition-transform hover:-translate-y-1',
      link: 'https://github.com/tsAntonio25'
    },
    {
      icon: 'fa-solid fa-envelope',
      name: 'Gmail',
      hoverstyle: 'hover:text-red-600 transition-transform hover:-translate-y-1',
      link: 'mailto:trishiamaeantonio@gmail.com'
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
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); 
      return;
    }

    const SERVICE_ID = 'service_a6bu0cd';
    const TEMPLATE_ID = 'template_6o4j5fi';
    const PUBLIC_KEY = 'D0HT9v3ZljMraHTJu';

    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email1, 
      message: this.contactForm.value.message,
      title: 'New Portfolio Inquiry' 
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        this.contactForm.reset(); 
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message.');
      });
  }
}