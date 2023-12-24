import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { MyObject, myObjects } from '../list/object-list.component';

@Component({
    selector: 'my-object-item',
    templateUrl: './object-item.component.html',
    styleUrl: './object-item.component.scss'
})

export class MyObjectItemComponent implements OnInit {

    public object?: MyObject

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.object = myObjects[params['id'] - 1]
        })
    }

}