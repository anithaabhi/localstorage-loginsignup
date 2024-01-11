import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  
constructor(private fb:FormBuilder,private authServie:AuthService, private router:Router){
  this.loginForm=this.fb.group({
    username:[""],
    password:[""]
  })
}

  ngOnInit() {
    
  }
  loginFn(){
    debugger;
    this.authServie.loginAuth(this.loginForm.value).subscribe((res:any)=>{
// console.log(res)

if(res.token){
  alert("login suess")

}else{
  alert("fail")
}
localStorage.setItem("logintoken",res.token)

this.router.navigateByUrl("/produts")
    })
  }
}