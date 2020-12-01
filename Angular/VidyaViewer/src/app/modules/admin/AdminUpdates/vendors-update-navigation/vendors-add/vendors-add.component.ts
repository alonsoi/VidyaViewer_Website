import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendors-add',
  templateUrl: './vendors-add.component.html',
  styleUrls: ['./vendors-add.component.css']
})
export class VendorsAddComponent implements OnInit {

  vendorsAdd: string= "Add new Vendors";
  
  constructor(private vendorsAddFB: FormBuilder) { }
  formVendorsAdd= this.vendorsAddFB.group({
    vendorName: ['', Validators.required],
    vendorDescription: ['', Validators.required],
    vendorAddress: this.vendorsAddFB.group({
      street: [''],
      state: [''],
      zip: ['']
    })
    //currentAssociatedGames: []
  });
  ngOnInit(): void {
  }

  onCancel()
  {
    this.formVendorsAdd.reset();
  }

}
