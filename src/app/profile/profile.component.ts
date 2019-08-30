import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';
import { RepoService} from '../repo-service/repo.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  // private user: string;
    
  // private repos: string = '60b9f23dedffbdfc476c';
  // private avatar_url: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

  user:User;
 constructor(private http:HttpClient){
  
 }

  ngOnInit() {
    interface ApiResponse{
      login: string;
     repos: any;
      userName: string;
     bio: string;
      avatar_url: string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=b50c3427acb4b022c72e2523ffce67ab2c9134be").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.login, data.repos, data.userName,  data.avatar_url)
    })
 
  }

}
