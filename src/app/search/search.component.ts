import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 

import{  InsertedSuccess,
  Read,
  Pesticide,
  UniqueConstraintError}from '../tabel1';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { PestserveService } from '../pestserve.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent  {
canshow:boolean=false;
  constructor(private Service:PestserveService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Pesticide = {
    crop_name:'',
    fertilizer:'',
    dosage_acer:'',
    dosage_water:''

   
  };
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
  Read(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.crop_name).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          console.log(data);
          this.User = {
            crop_name:this.a[0],
            fertilizer:this.a[1],
            dosage_acer:this.a[2],
            dosage_water:this.a[3],
            
            };
           this.canshow=true;
       console.log(this.a);
      

        }
        else{
         alert("Can't read");
        }
      }
    )
    alert(" Successfully readed (˘･_･˘)")
  }







}
