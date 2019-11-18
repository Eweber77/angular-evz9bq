import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,MatFormFieldModule],
  declarations: [ AppComponent, FormFieldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
