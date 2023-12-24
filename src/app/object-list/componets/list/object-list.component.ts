import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-object-list',
    templateUrl: './object-list.component.html',
    styleUrl: './object-list.component.scss',
})

export class MyObjectListComponent {

    constructor(private router: Router, private route: ActivatedRoute) { }

    public myObjects = myObjects;

    public redirectTo(id: number): void {
        this.router.navigate([`${id}`], { relativeTo: this.route })
    }
}

export const myObjects: MyObject[] = [
    {
        title: 'perviy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 1
    },
    {
        title: 'vtoroy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 2
    },
    {
        title: 'tretiy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 3
    },
    {
        title: 'chetvertiy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 4
    },
    {
        title: 'pyatiy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 5
    }
]

export interface MyObject {
    title: string;
    content: string;
    id: number;
}