import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder } from '@angular/forms';
import { Customer } from './customer';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      userForm: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        address: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zip: new FormControl()
      }),
      loginForm: new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      }),
      imgForm: new FormGroup({
        imageUpload: new FormControl()
      })
    });
  }

  // save(customerForm: NgForm) {
  //   console.log(customerForm.form);
  //   console.log('Saved: ' + JSON.stringify(customerForm.value));
  // }

  title = 'Reactive Forms Test App';
}
