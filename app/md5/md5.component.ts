import { Component } from '@angular/core';

import { MD5 } from './md5';

@Component({
    moduleId: module.id,
    selector: 'my-md5',
    templateUrl: 'md5.component.html',
})
export class MD5Component {
    input: string;
    result: any = '';
    hash(): void {
        this.result = MD5.encrypt(this.input);
    }
}

