import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyNavigation } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
