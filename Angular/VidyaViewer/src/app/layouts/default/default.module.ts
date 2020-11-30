import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { ThemesListComponent } from '../../modules/themes-list/themes-list.component';
import { ThemesComponent } from '../../modules/themes-list/themes/themes.component';
import { GamesListComponent } from '../../modules/games-list/games-list.component';
import { GamesComponent } from '../../modules/games-list/games/games.component';
import { DevelopersListComponent } from 'src/app/modules/developers-list/developers-list.component';
import { DevelopersComponent } from 'src/app/modules/developers-list/developers/developers.component';
import { VendorsListComponent } from 'src/app/modules/vendors-list/vendors-list.component';
import { VendorsComponent } from 'src/app/modules/vendors-list/vendors/vendors.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ThemesListComponent,
    ThemesComponent,
    GamesListComponent,
    GamesComponent,
    DevelopersListComponent,
    DevelopersComponent,
    VendorsListComponent,
    VendorsComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class DefaultModule { }
