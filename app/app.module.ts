// Angular
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Admin Components
import { AdminComponent } from './components/admin-page/admin/admin.component';
import { AdminGameDialogComponent } from './components/admin-page/admin-game-dialog/admin-game-dialog.component';
import { AdminDeveloperDialogComponent } from './components/admin-page/admin-developer-dialog/admin-developer-dialog.component';
import { AdminGamePageComponent } from './components/admin-page/admin-game-page/admin-game-page.component';
import { AdminDeveloperPageComponent } from './components/admin-page/admin-developer-page/admin-developer-page.component';
import { AdminGenrePageComponent } from './components/admin-page/admin-genre-page/admin-genre-page.component';
import { AdminGenreDialogComponent } from './components/admin-page/admin-genre-dialog/admin-genre-dialog.component';
import { AdminRatingPageComponent } from './components/admin-page/admin-rating-page/admin-rating-page.component';
import { AdminRatingDialogComponent } from './components/admin-page/admin-rating-dialog/admin-rating-dialog.component';
import { AdminVendorDialogComponent } from './components/admin-page/admin-vendor-dialog/admin-vendor-dialog.component';
import { AdminVendorPageComponent } from './components/admin-page/admin-vendor-page/admin-vendor-page.component';

// Content Components
import { AppComponent } from './app.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { DeveloperDescriptionComponent } from './components/developer-description/developer-description.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { GameComponent } from './components/game/game.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { VendorDescriptionComponent } from './components/vendor-description/vendor-description.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';

// Services
import { ApiService } from './services/api.service';

// Angular Material
import { ConfigAppModule } from './config-app.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminGameDialogComponent,
    DeveloperComponent,
    DeveloperDescriptionComponent,
    DeveloperListComponent,
    GameComponent,
    GameDescriptionComponent,
    GameListComponent,
    VendorComponent,
    VendorDescriptionComponent,
    VendorListComponent,
    AdminDeveloperDialogComponent,
    AdminGamePageComponent,
    AdminDeveloperPageComponent,
    AdminGenrePageComponent,
    AdminGenreDialogComponent,
    AdminRatingPageComponent,
    AdminRatingDialogComponent,
    AdminVendorDialogComponent,
    AdminVendorPageComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSidenavModule,
    HttpClientModule,
    MatExpansionModule,
    ConfigAppModule.forRoot('./assets/config/config.json')
  ],
  providers: [
    ApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
