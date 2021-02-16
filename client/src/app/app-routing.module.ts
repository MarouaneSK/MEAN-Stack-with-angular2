import { NgModule } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { RegisterMedcinComponent } from './components/register-medcin/register-medcin.component';

import { AuthGuard } from './guards/auth.guard';

import { JwtModule } from '@auth0/angular-jwt';

// import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{ path: 'dashboard',
component: DashboardComponent,
canActivate:[AuthGuard]
},
{
  path: 'login',
component: LoginComponent

},
{
 path:'profile',
 component:ProfileComponent,
 canActivate:[AuthGuard]
},
{ path: 'edit-blog/:id',
component: EditBlogComponent
},
{ path: 'delete-blog/:id',
component: DeleteBlogComponent,
canActivate:[AuthGuard]
},

{ path: 'register',
component: RegisterComponent
},

{ path: 'register-medcin',
component: RegisterMedcinComponent
},
{
  path:'blog',
  component:BlogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),JwtModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
