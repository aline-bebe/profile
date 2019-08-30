import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private userName: string;
    
    private clientId: string = '60b9f23dedffbdfc476c';
    private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
constructor(private http: HttpClient) {
     
        this.userName = '';
    } 

}
