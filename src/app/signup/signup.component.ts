import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
ngOnInit(){
  const localdata=localStorage.getItem('signupusers')
  if(localdata!=null){
    this.signupusers=JSON.parse(localdata)
  }
}
signupusers:any[]=[];
signupobj:any={
  username:"",
  email:"",
  password:""
}
SignUp(){
  debugger;
  this.signupusers.push(this.signupobj);
  localStorage.setItem("signupusers",JSON.stringify(this.signupusers))
  this.signupobj={
    username:"",
    email:"",
    password:""
  }
}

  
}


