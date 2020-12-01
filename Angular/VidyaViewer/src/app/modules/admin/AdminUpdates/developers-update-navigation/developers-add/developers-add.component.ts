import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { DeveloperAddService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/developer/developer-add/developer-add.service';

@Component({
  selector: 'app-developers-add',
  templateUrl: './developers-add.component.html',
  styleUrls: ['./developers-add.component.css']
})
export class DevelopersAddComponent implements OnInit {

  developerAdd: string= "Add New Production Company"  
  //constructor(public developerAddServ: DeveloperAddService) { }
  constructor (private developerAddFB: FormBuilder) { }
  formDeveloperAdd= this.developerAddFB.group({
    developerName: ['',Validators.required],
    developerDescription: ['',Validators.required]
  })
  
  ngOnInit(): void {
  }

  onCancel()
  {
    //.this.developerAddServ.formDeveloperAdd.reset();
    //this.developerAddServ.initializeFormGroup();
    this.formDeveloperAdd.reset();
  }

}
