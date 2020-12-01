import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevelopersAddComponent} from './developers-add.component';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule ({
    declarations: [ DevelopersAddComponent],
    imports: [
        CommonModule,
        //MatFormFieldModule,
        MaterialModule
    ]
})

export class DeveloperAddModule { }
