import { Component, OnInit } from '@angular/core';

import { AboutService } from './about.service'

import { About } from './about'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
