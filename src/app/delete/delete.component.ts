import { Component,OnInit,OnDestroy } from '@angular/core';

import { NgForm } from '@angular/forms'; 
import{  InsertedSuccess,
  Read,
  Students,
  UniqueConstraintError}from '../tabel';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
 import { MahithService } from '../mahith.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit , OnDestroy{
 canShow:boolean=true;
  show:boolean=false;
  canshow:boolean=false;
  constructor(private Service:MahithService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Students = {
    fname:'',
    lname:'',
    email:'',
    phone:0,
    pass:'',
    rpass:''
    
  };
  SuccessMsg = '';
  ErrorMsg = '';

  Delete(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete(this.User.email).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.canshow=false;
          this.SuccessMsg = ` SUCCESSFULLY DELETED`;
        }
        else{
          alert("failed");
          this.ErrorMsg = `${this.User.phone} NO RECORD FOUND`;
         }
      }
    )
    alert("  Deleted Successfully (●'◡'●) ");
  }
  
 
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
