import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../modules/login/login.component';
import { AdminLoginComponent } from '../modules/admin/admin-login/admin-login.component';
import { SignUpComponent } from '../modules/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeAddComponent } from '../modules/admin/AdminUpdates/theme-update-navigation/theme-add/theme-add.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SignUpComponent,
    LoginComponent,
    AdminLoginComponent,
    ThemeAddComponent
  ],

  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule   
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SignUpComponent,
    LoginComponent,
    AdminLoginComponent,
    ThemeAddComponent
  ]
})
export class SharedModule { }
