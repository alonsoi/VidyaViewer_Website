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
import { ThemeUpdateComponent } from './modules/admin/AdminUpdates/theme-update/theme-update.component';
import { DevelopersUpdateNavigationComponent } from './modules/admin/AdminUpdates/developers-update-navigatioin/developers-update-navigation.component';
import { VendorsUpdateComponent } from './modules/admin/AdminUpdates/vendors-update/vendors-update.component';


@NgModule({
  declarations: [
    AppComponent,
    GameUpdateNavigationComponent,
    DevelopersUpdateNavigationComponent,
    ThemeUpdateComponent,
    VendorsUpdateComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SignUpComponent,
    LoginComponent,
    AdminLoginComponent,
    GameUpdateNavigationComponent,
    DevelopersUpdateNavigationComponent,
    ThemeUpdateComponent,
    VendorsUpdateComponent
  ]
})
export class AppModule { }
