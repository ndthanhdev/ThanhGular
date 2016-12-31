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
    copy(): void {
        // Create an auxiliary hidden input
        var aux = document.createElement("input");
        // Get the text from the element passed into the input
        aux.setAttribute("value", document.getElementById('output').innerHTML);

        // Append the aux input to the body
        document.body.appendChild(aux);

        // Highlight the content
        aux.select();

        // Execute the copy command
        document.execCommand("copy");

        // Remove the input from the body
        document.body.removeChild(aux);

        alert('copied');
    }
}

