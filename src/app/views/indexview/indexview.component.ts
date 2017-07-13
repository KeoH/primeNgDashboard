import { Component } from '@angular/core';

import { Post } from '../../models';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-indexview',
  templateUrl: './indexview.component.html',
  styleUrls: ['./indexview.component.css']
})
export class IndexviewComponent {

  posts: Post[];

  constructor() {
    new PostsService().fetchAll()
      .then((posts)=>{
        this.posts = posts;
        console.log(this.posts);
      }, (error)=>console.warn(error));

    
  }

}
