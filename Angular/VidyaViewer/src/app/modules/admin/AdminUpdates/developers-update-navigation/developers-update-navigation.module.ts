import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DevelopersUpdateNavigationComponent } from './developers-update-navigation.component';
import { DevelopersAddComponent } from './developers-add/developers-add.component';
import { DevelopersUpdateComponent } from './developers-update/developers-update.component';


@NgModule({
  declarations: [
    DevelopersUpdateNavigationComponent,
    DevelopersAddComponent,
    DevelopersUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductionCompaniesUpdateModule { }
