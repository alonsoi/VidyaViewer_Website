import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    ThemesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ThemesListModule { }
