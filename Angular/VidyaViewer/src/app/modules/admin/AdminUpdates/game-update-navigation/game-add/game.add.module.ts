import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { GameAddComponent } from './game-add.component';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule ({
    declarations: [ GameAddComponent],
    imports: [
        CommonModule,
        //MatFormFieldModule,
        MaterialModule
    ]
})

export class GameAddModule { }
