import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { FormsRouting } from './forms-routing.module';
import { RateComponent } from './components/rate/rate.component';



@NgModule({
  declarations: [
    FormsComponent,
    RateComponent
  ],
  imports: [
    CommonModule,
    FormsRouting,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FormsUIModule { }
