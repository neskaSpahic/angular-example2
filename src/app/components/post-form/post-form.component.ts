import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {


  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input()  currentPostt: Post;
  @Input()  isEditt: boolean;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){   
    if(!title || !body){
      alert("Please enter");
    }else{
    this.postService.savePost({title,body} as Post).subscribe(post =>{
      this.newPost.emit(post);
    });
    }
  }

  updatePost(){
    console.log(1,2,3,4,5);
  }

 

}
