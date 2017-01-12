import { Component } from '@angular/core';

import { MD5Component } from './md5/md5.component';
import { AboutComponent } from './about/about.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',  
  templateUrl: 'app.component.html',
})
export class AppComponent {
  name = 'Angular';
}
