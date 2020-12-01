import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-developers-add',
  templateUrl: './developers-add.component.html',
  styleUrls: ['./developers-add.component.css']
})
export class DevelopersAddComponent implements OnInit {

  developerAdd: string= "Add New Production Company"  

  constructor (private developerAddFB: FormBuilder) { }
  formDeveloperAdd= this.developerAddFB.group({
    developerName: ['', Validators.required],
    developerDescription: ['', Validators.required]
  })
  
  ngOnInit(): void {
  }

  onCancel()
  {
    this.formDeveloperAdd.reset();
  }

}
