import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DecoratorsPageComponent } from './components/decorators-page/decorators-page.component';
import { DecoratorsRouting } from './decorators-routing.module';



@NgModule({
    declarations: [
        DecoratorsPageComponent
    ],
    imports: [
        CommonModule,
        DecoratorsRouting,
    ]
})
export class DecoratorsModule { }
