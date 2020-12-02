import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { MaterialModule} from './shared/material/material.module';
import { GameUpdateNavigationComponent } from './modules/admin/AdminUpdates/game-update-navigation/game-update-navigation.component';
import { ThemeUpdateNavigationComponent } from './modules/admin/AdminUpdates/theme-update-navigation/theme-update-navigation.component';
import { DevelopersUpdateNavigationComponent } from './modules/admin/AdminUpdates/developers-update-navigation/developers-update-navigation.component';
import { VendorsUpdateNavigationComponent } from './modules/admin/AdminUpdates/vendors-update-navigation/vendors-update-navigation.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    GameUpdateNavigationComponent,
    DevelopersUpdateNavigationComponent,
    ThemeUpdateNavigationComponent,
    VendorsUpdateNavigationComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MaterialModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SignUpComponent,
    LoginComponent,
    AdminLoginComponent,
    GameUpdateNavigationComponent,
    ThemeUpdateNavigationComponent,
    DevelopersUpdateNavigationComponent,
    VendorsUpdateNavigationComponent
  ]
})
export class AppModule { }
