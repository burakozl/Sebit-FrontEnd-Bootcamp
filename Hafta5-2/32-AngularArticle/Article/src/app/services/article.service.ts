import { Injectable } from '@angular/core';
import { BaseService } from './base.services'

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService {

  constructor(private base: BaseService) {
    super(base.http)
   }

   public postArticle(data: any){
    return this.base.postReq('/articles',data);
   }
   public getArticles(){
    return this.base.getReq('/articles');
   }
   public updateArticle(data:any){
    return this.base.putReq('/articles/'+data.id,data);
   }
}

