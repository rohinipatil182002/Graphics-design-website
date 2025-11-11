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

  // contactForm: FormGroup;
  // isSubmitting = false;

  // constructor(private fb: FormBuilder, private toastr: ToastrService) {
  //   this.contactForm = this.fb.group({
  //     fullName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  //     companyName: ['', Validators.required],
  //     message: ['']
  //   });


  //   emailjs.init('OJ0BWS7vxhei2rTon');
  // }


  // onSubmit(): void {
  //   if (this.contactForm.valid) {
  //     this.isSubmitting = true;

  //     const templateParams = {
  //       to_email: 'info@graphicdesigndisplay.com',
  //       from_name: this.contactForm.value.fullName,
  //       from_email: this.contactForm.value.email,
  //       from_phone: this.contactForm.value.mobile,
  //       company: this.contactForm.value.companyName,
  //       message: this.contactForm.value.message
  //     };

  //     emailjs.send(
  //       'service_4rcruo5',
  //       'template_jtu79de',
  //       templateParams
  //     ).then(
  //       () => {
  //         this.toastr.success('Message sent successfully!', 'Success');
  //         this.isSubmitting = false;
  //         this.contactForm.reset();
  //       },
  //       () => {
  //         this.toastr.error('Failed to send message. Please try again.', 'Error');
  //         this.isSubmitting = false;
  //       }
  //     );
  //   } else {
  //     Object.keys(this.contactForm.controls).forEach(key => {
  //       this.contactForm.get(key)?.markAsTouched();
  //     });
  //   }
  // }

  // get f() {
  //   return this.contactForm.controls;
  // }
}
