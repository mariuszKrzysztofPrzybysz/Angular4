import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  constructor(_formBuilder: FormBuilder) {
    this.form = _formBuilder.group({
      name: ['', Validators.required],//new FormControl('', Validators.required)
      contact: _formBuilder.group({//new FormGroup({...})
        email: [],
        phone: []
      }),
      topics: _formBuilder.array([])//new FormArray([])
    })

  }

  ngOnInit() {
  }

  form: FormGroup;
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl): void {
    var index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
