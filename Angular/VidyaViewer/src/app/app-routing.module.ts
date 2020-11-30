import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ThemesListComponent } from './modules/themes-list/themes-list.component';
import { ThemesComponent } from './modules/themes-list/themes/themes.component';
import { GamesListComponent } from './modules/games-list/games-list.component';
import { GamesComponent } from './modules/games-list/games/games.component';
import { DevelopersListComponent } from './modules/developers-list/developers-list.component';
import { DevelopersComponent } from './modules/developers-list/developers/developers.component';
import { VendorsListComponent } from './modules/vendors-list/vendors-list.component';
import { VendorsComponent } from './modules/vendors-list/vendors/vendors.component';

const routes: Routes =
  [{
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'themes-list',
        component: ThemesListComponent,
        children:[
          {
            path: 'theme-specific',
            component: ThemesComponent,
            children:[
              {
                  path: 'games-list',
                  component: GamesListComponent,
                  children: [
                    {
                      path: 'game',
                      component: GamesComponent
                    }
                  ]
              }
            ]
          }
        ]
      },
      {
        path: 'production_companies-list',
        component: DevelopersListComponent,
        children: [
          {
            path: 'production_company-specific',
            component: DevelopersComponent
          }
        ]
      },
      {
        path: 'vendors',
        component: VendorsListComponent,
        children: [
          {
            path: 'vendors-specific',
            component: VendorsComponent
          }
        ]
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
