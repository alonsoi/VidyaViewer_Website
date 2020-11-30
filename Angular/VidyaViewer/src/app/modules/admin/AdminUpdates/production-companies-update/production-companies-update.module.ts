import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProductionCompaniesUpdateComponent } from './production-companies-update.component';


@NgModule({
  declarations: [
    ProductionCompaniesUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductionCompaniesUpdateModule { }
