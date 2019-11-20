import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface DC {
  id: string;
  Value: string;
}

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  Party1 = new FormControl('', [Validators.required]);
  Party2 = new FormControl('', [Validators.required]);
  TradeDate = new FormControl('', [Validators.required]);
  MaturityDate = new FormControl('', [Validators.required]);
  StartDate = new FormControl('', [Validators.required]);
  Nominal = new FormControl('', [Validators.required]);
  Rate = new FormControl('', [Validators.required]);
  constructor() { }



  ngOnInit() {
  }

}
export class DayCountChoice {
  DayCounts: DC[] = [
    {id:"1",Value: 'ACT/360'},
    {id:"2",Value: 'ACT/365'},
    {id:"3",Value: '30/360'}  
  ];
}