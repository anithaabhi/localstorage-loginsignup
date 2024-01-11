import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit{
  produtsArray:any[]=[];

constructor(private _authservies:AuthService){
}
  ngOnInit(){
    this.getproduts()
  }
  getproduts(){
    this._authservies.getallProducts().subscribe(( res:any)=>{
      this.produtsArray=res.products;
    })
  }
}
