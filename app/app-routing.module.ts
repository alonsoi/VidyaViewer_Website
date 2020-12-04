import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { AdminComponent } from './components/admin-page/admin/admin.component';
import { AdminGamePageComponent } from './components/admin-page/admin-game-page/admin-game-page.component';
import { AdminDeveloperPageComponent } from './components/admin-page/admin-developer-page/admin-developer-page.component';
import { AdminGenrePageComponent } from './components/admin-page/admin-genre-page/admin-genre-page.component';
import { AdminRatingPageComponent } from './components/admin-page/admin-rating-page/admin-rating-page.component';
import { AdminVendorPageComponent } from './components/admin-page/admin-vendor-page/admin-vendor-page.component';

import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { DeveloperDescriptionComponent } from './components/developer-description/developer-description.component';
import { VendorDescriptionComponent } from './components/vendor-description/vendor-description.component';


const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'vendors', component: VendorListComponent },
  { path: 'developers', component: DeveloperListComponent },
  { path: 'game-description/:id', component: GameDescriptionComponent },
  { path: 'developer-description/:id', component: DeveloperDescriptionComponent },
  { path: 'vendor-description/:id', component: VendorDescriptionComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-game-page', component: AdminGamePageComponent },
  { path: 'admin-developer-page', component: AdminDeveloperPageComponent },
  { path: 'admin-genre-page', component: AdminGenrePageComponent },
  { path: 'admin-rating-page', component: AdminRatingPageComponent },
  { path: 'admin-vendor-page', component: AdminVendorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
