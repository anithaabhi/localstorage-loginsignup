import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
signupuses: any;
ngOnInit(){
  const localdata:any=localStorage.getItem('signupusers')
  if(localdata!=null){
  this.signupuses=JSON.parse(localdata)
  }
}
loginobj:any={
  username:"",
  password:""
}

LogIn(){
  const isuserExits=this.signupuses.find((m: any)=>m.username==this.loginobj.username&&m.password==this.loginobj.password)
  if(isuserExits!=undefined){
    alert("loginsuccess")
  }else{
    alert("fail")
  }
  
}

}
