import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipesRouting } from './pipes-routing.module';
import { MyCustomPipe } from './pipe/my-custom.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    MyCustomPipe,
  ],
  imports: [
    CommonModule,
    PipesRouting,
  ]
})
export class PipeModule { }
