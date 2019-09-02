import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoHttpService } from '../repo-http/repo-http.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username:string; 
 answer:any;
 repos:any;
//  public githubUser:string;
  constructor(private http:HttpClient, private repoService:RepoHttpService) { }

  ngOnInit() {
  }
  search(){
    // this service.GitRequest
  this.http.get('https://api.github.com/users/'+ this.username +"?access_token=4a5502cd664dd7cb15b98c867b5685845dabf573").subscribe((answer)=> {
  
  this.answer=answer;
  })
  }
}
