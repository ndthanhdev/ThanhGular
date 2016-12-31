import { Component, OnInit } from '@angular/core';

import { AboutService } from './about.service'

import { About } from './about'

@Component({
    moduleId: module.id,
    selector: 'my-about',
    templateUrl: 'about.component.html',
    providers: [AboutService]
})
export class AboutComponent implements OnInit {
    about: About;

    constructor(private service: AboutService) {

    }

    ngOnInit() {
        this.service.getAbout().then(about => {
            this.about = about;
        });
    }
}