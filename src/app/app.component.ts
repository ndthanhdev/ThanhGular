import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MD5Component } from './md5/md5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
