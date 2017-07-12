import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { IndexviewComponent } from './views/indexview/indexview.component';

import { AuthService } from './services/auth.service';

const routes = [
  { path: '', component: IndexviewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexviewComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
