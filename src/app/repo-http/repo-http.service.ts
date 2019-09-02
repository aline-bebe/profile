import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class RepoHttpService {
  user:User;

  constructor(private http:HttpClient) {
    this.user = new User("","","","");
   }


   repohttp(){
    interface ApiResponse{
      login: string;
      name: any;
      email: string;
    //  bio: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.login = response.login
        this.user.name = response.name
        this.user.email = response.email
        // this.user.bio= response.bio
        this.user.avatar_url = response.avatar_url

        resolve()
      },
      // error=>{
      //   this.quote.quote = "Never, never, never give up"
      //   this.quote.author = "Winston Churchill"

      //   reject(error)
      // }
      )

    })
    return promise
  }

}