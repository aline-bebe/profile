export class User {
    // public showDescription: boolean;
    // constructor(public id: number,public name: string,public bio: string, public avatar_url: string, public html_url:string){
    //   this.showDescription=false;
    // }



    constructor(
      public login: string,
      public repos: any,
      public userName: string,
   
      public avatar_url: string,
  ) { }
}
