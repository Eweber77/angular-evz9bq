import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  Party1 = new FormControl('', [Validators.required]);
  Party2 = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
  }

}