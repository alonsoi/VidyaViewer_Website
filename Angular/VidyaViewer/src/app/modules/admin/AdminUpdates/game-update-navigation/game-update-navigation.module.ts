import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { GameUpdateNavigationComponent } from './game-update-navigation.component';



@NgModule({
  declarations: [ GameUpdateNavigationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GameUpdateNavigationModule { }
