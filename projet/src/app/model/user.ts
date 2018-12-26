export class User {
    id:string;
    name: string;
    username:string;
    email:string;
    userImage:string;
    password:string;
    password2:string;
    constructor(id,name,username,email,userImage, password, password2) {
        this.id=id ;
      this.name=name;
      this.username=username;
      this.email = email;
      this.userImage=userImage;
      this.password = password; 
      this.password2 = password2;
  }
  }