import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { GameUpdateComponent } from './game-update.component';



@NgModule({
  declarations: [ GameUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GameUpdateModule { }
