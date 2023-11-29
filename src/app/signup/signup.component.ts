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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit , OnDestroy {
  

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
  


  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = ` Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
    alert(" Successfully Registered in(●'◡'●)  ");
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


}