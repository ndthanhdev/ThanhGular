import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MD5Component } from './md5/md5.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full', },
    { path: 'md5', component: MD5Component, },
    { path: 'about', component: AboutComponent, },
    { path: 'welcome', component: WelcomeComponent, },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }