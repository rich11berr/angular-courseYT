import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
    {
        path: '',
        component: PipesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PipesRouting { }
