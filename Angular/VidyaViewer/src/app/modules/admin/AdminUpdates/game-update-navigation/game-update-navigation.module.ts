import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { GameUpdateNavigationComponent } from './game-update-navigation.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameUpdateComponent } from './game-update/game-update.component';



@NgModule({
  declarations: [ GameUpdateNavigationComponent, GameAddComponent, GameUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GameUpdateNavigationModule { }
