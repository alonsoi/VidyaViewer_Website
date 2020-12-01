import { Component, OnInit } from '@angular/core';
import { VendorsAddService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/vendors/vendors-add/vendors-add.service';

@Component({
  selector: 'app-vendors-add',
  templateUrl: './vendors-add.component.html',
  styleUrls: ['./vendors-add.component.css']
})
export class VendorsAddComponent implements OnInit {

  constructor(public vendorsAddServ: VendorsAddService) { }

  vendorsAdd: string= "Add new Vendors";
  ngOnInit(): void {
  }

  onCancel()
  {
    this.vendorsAddServ.formVendorAdd.reset();
    this.vendorsAddServ.initializeFormGroup();
  }

}
