export class User {
    name: string;
    username:string;
    email:string;
    password:string;
    password2:string;
    constructor(name,username,email, password, password2) {
      this.name=name;
      this.username=username;
      this.email = email;
      this.password = password; 
      this.password2 = password2;
  }
  }