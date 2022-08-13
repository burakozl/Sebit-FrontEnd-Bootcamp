import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  id: any;
  blogObj:any = {};

  form = new FormGroup({
    title : new FormControl(null,[Validators.required]),
    body : new FormControl(null,[Validators.required])
  });

  constructor(
    private route: ActivatedRoute,
    private blogService:BlogService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(this.id).subscribe((res) =>{
      this.blogObj = res;
      this.form.patchValue({
        title: this.blogObj.title,
        body: this.blogObj.body,
      });
    });
  }

  onSubmit(){
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.blogObj.imageId,
      userId: this.blogObj.userId,
    };

    this.blogService.updatePost(this.blogObj.id,request).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
}
