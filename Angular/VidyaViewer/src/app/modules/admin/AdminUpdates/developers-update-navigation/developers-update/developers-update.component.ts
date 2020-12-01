import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-developers-update',
  templateUrl: './developers-update.component.html',
  styleUrls: ['./developers-update.component.css']
})
export class DevelopersUpdateComponent implements OnInit {
  developerUpdate: string= "Update: pass in value viaAPI";  
  constructor(private developerUpdateFB: FormBuilder) { }

  //current associated games should populate a list to display
  developerUpdateForm= this.developerUpdateFB.group({
    developerName:['',Validators.required],
    developerDescription:['', Validators.required],
    currentAssociatedGames: []
  })
  ngOnInit(): void {
  }

  onCancel()
  {
    this.developerUpdateForm.reset();
    
  }  

}
