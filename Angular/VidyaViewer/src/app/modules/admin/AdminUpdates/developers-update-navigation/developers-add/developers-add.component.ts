import { Component, OnInit } from '@angular/core';
import { DeveloperAddService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/developer/developer-add/developer-add.service';

@Component({
  selector: 'app-developers-add',
  templateUrl: './developers-add.component.html',
  styleUrls: ['./developers-add.component.css']
})
export class DevelopersAddComponent implements OnInit {

  constructor(public developerAddServ: DeveloperAddService) { }

  developerAdd: string= "Add New Developer"
  ngOnInit(): void {
  }

  onCancel()
  {
    this.developerAddServ.formDeveloperAdd.reset();
    this.developerAddServ.initializeFormGroup();
  }

}
