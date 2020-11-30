import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { VendorsUpdateNavigationComponent } from './vendors-update-navigation.component';
import { VendorsAddComponent } from './vendors-add/vendors-add.component';
import { VendorsUpdateComponent } from './vendors-update/vendors-update.component';


@NgModule ({
    declarations:[
    VendorsUpdateNavigationComponent,
    VendorsAddComponent,
    VendorsUpdateComponent
    ],
    imports:[
    CommonModule,
    MaterialModule
    ]
})

export class ThemeUpdateModule { }