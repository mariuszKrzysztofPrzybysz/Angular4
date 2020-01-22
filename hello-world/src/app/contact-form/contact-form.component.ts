import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayNgModelDetails(data: NgModel) {
    console.log(data);
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm);

    console.log(contactForm.value);//could be used to send via HTTP
    /**
     * {
     *  firstName: "Jan",
     *  comment: "Bye!"
     * }
     */
  }
}
