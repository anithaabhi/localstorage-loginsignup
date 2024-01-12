import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit{
  produtsArray:any[]=[];
p:number=0;

totalcards:number=10;
totalSizes:any=[5,10,15,20]
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
