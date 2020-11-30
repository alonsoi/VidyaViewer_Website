import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DevelopersUpdateNavigationComponent } from './developers-update-navigation.component';


@NgModule({
  declarations: [
    DevelopersUpdateNavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductionCompaniesUpdateModule { }
