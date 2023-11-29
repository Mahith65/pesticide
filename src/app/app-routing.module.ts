import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { Home1Component } from './home1/home1.component';
import { PesticideComponent } from './pesticide/pesticide.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Comp1Component } from './comp1/comp1.component';
import { TempComponent } from './temp/temp.component';
import { ButtonComponent } from './button/button.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home1', component:Home1Component},
  
  {path:'',component:Comp1Component},
  {path:'temp',component:TempComponent,
  children:[
    {path:'pesticide',component:PesticideComponent},
  {path:'search',component:SearchComponent},
  {path:'delete',component:DeleteComponent},
  {path:'update',component:UpdateComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'button',component:ButtonComponent,
  children:[
    {path:'pesticide',component:PesticideComponent},
  {path:'search',component:SearchComponent},
  {path:'delete',component:DeleteComponent},
  {path:'update',component:UpdateComponent}]
}


  ]

}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
