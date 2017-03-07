import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { About } from './about'

@Injectable()
export class AboutService {

    private aboutUrl: string = 'https://raw.githubusercontent.com/thanhtdt/ThanhGular/master/old/app/about/about.json';

    constructor(private http: Http) {

    }
    getAbout(): Promise<About> {
        return this.http.get(this.aboutUrl).toPromise().then(response => response.json().About as About);
    }

}
