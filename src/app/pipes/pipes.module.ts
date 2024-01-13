import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipesRouting } from './pipes-routing.module';



@NgModule({
  declarations: [
    PipesComponent,
  ],
  imports: [
    CommonModule,
    PipesRouting,
  ]
})
export class PipeModule { }
