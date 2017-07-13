import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { IndexviewComponent } from './views/indexview/indexview.component';

import { AuthService, PostsService, TagsService, MessagesService } from './services';

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
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    PostsService, 
    TagsService, 
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
