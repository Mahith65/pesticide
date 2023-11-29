import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  Pesticide,
  UniqueConstraintError}from '../tabel1';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { PestserveService } from '../pestserve.service';
@Component({
  selector: 'app-pesticide',
  templateUrl: './pesticide.component.html',
  styleUrls: ['./pesticide.component.css']
})
export class PesticideComponent implements OnInit , OnDestroy  {
  constructor(private Service:PestserveService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Pesticide = {
    crop_name:'',
    fertilizer:'',
    dosage_acer:'',
    dosage_water:''
    
  };
  SuccessMsg = '';
  ErrorMsg = '';
  


  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.crop_name} alredy Exists`;
        } else {
          this.SuccessMsg = ` Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
    alert(" Successfully Inserted  ");
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


}


