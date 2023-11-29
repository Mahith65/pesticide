import { Component,OnInit ,OnDestroy  } from '@angular/core';
import {
  InsertedSuccess,
  Pesticide,
  UniqueConstraintError,
}from '../tabel1';
import { Subscription } from 'rxjs';
import { PestserveService } from '../pestserve.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit , OnDestroy {

  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
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
    this.clicked=true;
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.crop_name).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];
          this.retrive=true;
         
          this.User = {
            crop_name:this.a[0] ,
            fertilizer:this.a[1],
            dosage_acer:this.a[2],
            dosage_water:this.a[3]
            
          
            };
            }
        else{
       alert("can't update");
        }
      }
    )
    
  }
  Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.User.crop_name,this.User).subscribe(


      
      (data:any)=>{
        if(data){
        
          this.SuccessMsg = `${this.User.crop_name} updated sucessfully`;
        }
        else{
          this.ErrorMsg = `${this.User.crop_name} No record Found`;
        }

      }
    )
    
  alert(" Updated successfully (●'◡'●)")
   
    console.log(this.User);
    this.canShow=false;
  }
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShow=false;
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  
}


