import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';


@NgModule({
    imports: [FormsModule, BrowserModule],
    exports: [MyCalculatorComponent],
    declarations: [MyCalculatorComponent],
    providers: [],
})
export class MyCalculatorModule { }
