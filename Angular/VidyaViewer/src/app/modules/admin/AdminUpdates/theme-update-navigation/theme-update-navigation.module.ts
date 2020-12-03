import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ThemeUpdateNavigationComponent } from './theme-update-navigation.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule ({
    declarations:[
    ThemeUpdateNavigationComponent,
    ThemeAddComponent,
    ThemeUpdateComponent
    ],
    imports:[
    CommonModule,
    MaterialModule,
    MatSelectModule
    ]
})

export class ThemeUpdateNavigationModule { }