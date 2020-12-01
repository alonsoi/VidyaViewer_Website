import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DevelopersUpdateComponent } from './developers-update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule ({
    declarations: [ DevelopersUpdateComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MaterialModule
    ]
})

export class DeveloperUpdateModule { }
