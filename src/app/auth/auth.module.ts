import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { LoginComponent } from './login/login.component';
import { FormioModule } from 'angular-formio';
import { RegisterComponent } from './register/register.component';

const authRoutes = FormioAuthRoutes({
  login: LoginComponent,
  register: RegisterComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioAuth,
    FormioModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
