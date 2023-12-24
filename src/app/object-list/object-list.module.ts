import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyObjectItemComponent } from './componets/item/object-item.component';
import { MyObjectListComponent } from './componets/list/object-list.component';
import { MyObjectListRouting } from './object-list-routing.module';


@NgModule({
    imports: [CommonModule, MyObjectListRouting],
    exports: [MyObjectListComponent, MyObjectItemComponent],
    declarations: [MyObjectListComponent, MyObjectItemComponent],
    providers: [],
})
export class MyObjectListModule { }
