import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { BlogService } from './services/blog.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BlogComponent } from './components/blog/blog.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';

import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { RegisterMedcinComponent } from './components/register-medcin/register-medcin.component';
import { LoginMedcinComponent } from './components/login-medcin/login-medcin.component';
// import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    LoginComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    RegisterMedcinComponent,
    LoginMedcinComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule,FormsModule,


  ],
  providers: [AuthGuard,AuthService,BlogService,JwtModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
