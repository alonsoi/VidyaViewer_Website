import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ThemeUpdateComponent } from './theme-update.component';


@NgModule ({
    declarations:[
    ThemeUpdateComponent
    ],
    imports:[
    CommonModule,
    MaterialModule
    ]
})

export class ThemeUpdateModule { }