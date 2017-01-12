import { Component, OnInit } from '@angular/core';

import { WelcomeService } from './welcome.service'

@Component({
    moduleId: module.id,
    selector: 'my-welcome',
    templateUrl: 'welcome.component.html',
    providers: [WelcomeService]
})
export class WelcomeComponent implements OnInit {
    constructor(private service: WelcomeService) { }

    time: string = '...';

    ngOnInit() {
        this.service.getTime().then(s => this.time = s);
    }
}