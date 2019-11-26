import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { formatDate } from "@angular/common";

export const MY_FORMAT: MatDateFormats = {
parse: {
dateInput: 'DD/MM/YYYY',
},
display: {
dateInput: 'DD/MM/YYYY',
monthYearLabel: 'MMM YYYY',
dateA11yLabel: 'DD/MM/YYYY',
monthYearA11yLabel: 'MMMM YYYY',
},
};

export var TradeID: number;


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],

})
export class FormFieldComponent implements OnInit {
  TradeID=new FormControl('');
  Party1 = new FormControl('', [Validators.required]);
  Team = new FormControl('', [Validators.required]);
  Party2 = new FormControl('', [Validators.required]);
  TradeDate = new FormControl('', [Validators.required]);
  MaturityDate = new FormControl('', [Validators.required]);
  StartDate = new FormControl('', [Validators.required]);
  Nominal = new FormControl('', [Validators.required]);
  Rate = new FormControl('', [Validators.required]);
  Currency = new FormControl('', [Validators.required])
  DayCount = new FormControl('', [Validators.required])
  constructor() { }


  DayCounts: [] = [
    {Value: 'ACT/360'},
    {Value: 'ACT/365'},
    {Value: '30/360'}  ];

  Currencies: [] = [
    {Value: 'EUR'},
    {Value: 'GBP'},
    {Value: 'USD'}  ];

  clickMessage = '';

  onClickMe() {
    this.clickMessage = "Sending String";
  }
  setJSON(id:string,Party1: string,Team:string,Party2: string,TradeDate: Date,StartDate: Date,MaturityDate: Date,Currency: string,Nominal: number,Rate: number,DayCount: string) {
  
  // Putting 0 as the default value if blank
  if (id==='') 
    {this.id=0}
  else 
    {this.id=id}

  
  this.message=
  {
        "id":this.id,
        "contractingEntity": Party1,
        "contractingTeam": "Sales",
        "counterpart": Party2,
        "currency": Currency,
        "dealType": "Loan",
        "startDate": StartDate,
        "endDate": MaturityDate,
        "risk":"",
        "legs": [
            {
                "index": "",
                "paymentFrequency": "T",
                "resetFrequency": "",
                "calculationFrequency": "T",
                "convention": DayCount,
                "rateOrMargin": Rate
            }
        ]
  }}
  
  ngOnInit() {
  }

}
