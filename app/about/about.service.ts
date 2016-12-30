import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { About } from './about'

const aboutUrl = 'asdasd';


@Injectable()
export class AboutService {

    constructor(private http: Http) {

    }
    getAbout(): Promise<About> {
        return this.http.get(aboutUrl).toPromise().then(response => response.json() as About);
    }
}