import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

 contactForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    emailjs.init('rg4BtF5yq7BuzWiC3');
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
    
      fullName: ['',[ Validators.required, Validators.pattern(/^[^\s].*$/)] ],
      email: [
        '',
        [
          Validators.required, 
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/)   
        ]
      ],
      mobile: ['',  [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/)   
        ]],
      companyName: ['', Validators.required],
      message: ['']
    }); 
  }

  onSubmit(): void {
     if (this.contactForm.invalid) {
      Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
        control.updateValueAndValidity();
      });
      return;
    }

      this.isSubmitting = true;

      const templateParams = {
        to_email: 'info@graphicdesigndisplay.com',
        from_name: this.contactForm.value.fullName,
        from_email: this.contactForm.value.email,
        from_phone: this.contactForm.value.mobile,
        company: this.contactForm.value.companyName,
        message: this.contactForm.value.message
      };

      emailjs.send(
        'service_601e71d',
        'template_0fkdic6',
        templateParams
      ).then(
        () => {
          this.toastr.success('Message sent successfully!', 'Success');
          this.isSubmitting = false;
          this.contactForm.reset();
        },
        () => {
          this.toastr.error('Failed to send message. Please try again.', 'Error');
          this.isSubmitting = false;
        }
      );
    
  }

  get f() {
    return this.contactForm.controls;
  }
}
