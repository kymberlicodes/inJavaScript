import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.scss']
})
export class LoginInformationComponent implements OnInit {

  @Input() customerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
