import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Home1Component } from './home1/home1.component';
import { PesticideComponent } from './pesticide/pesticide.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TempComponent } from './temp/temp.component';
import { Comp1Component } from './comp1/comp1.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SignupComponent,
    Home1Component,
    PesticideComponent,
    SearchComponent,
    DeleteComponent,
    UpdateComponent,
    ContactusComponent,
    TempComponent,
    Comp1Component,
    ButtonComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
