import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  loginAuth(obj:any){
    return this._http.post('https://dummyjson.com/auth/login',obj)
  }
  getallProducts(){
    return this._http.get('https://dummyjson.com/products')

  }
}
