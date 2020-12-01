import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  gameAdd: string="Add new Game";

  constructor(private gameAddFB: FormBuilder) { }
  formGameAdd= this.gameAddFB.group({
    gameName: ['', Validators.required],
    platformType: ['', Validators.required],
    gameDescription: ['', Validators.required],
    gameDeveloper: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onCancel()
  {
    this.formGameAdd.reset();
  }

}
