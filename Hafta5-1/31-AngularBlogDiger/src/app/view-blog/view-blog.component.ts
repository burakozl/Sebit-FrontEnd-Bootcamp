import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BlogService } from '../services/blog.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  id: any ='';
  postData = {
    title : '',
    body : '',
    imageId : 0,
    userId : 0,
    id : 0
  };
  blogComments:Array<any> = [];

  constructor(private route: ActivatedRoute, private blogService:BlogService,private commentService:CommentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostData(this.id);
    this.getPostComment();
  }
    getPostData(id:any){
    this.blogService.getPost(id).subscribe((res) =>{
    this.postData = res;
    });
  }
    getPostComment(){
     this.commentService.getComments().subscribe((res) =>{
      this.blogComments = res.filter((comment: { postId: number; }) => comment.postId === this.postData.id);
    });
  }

}
