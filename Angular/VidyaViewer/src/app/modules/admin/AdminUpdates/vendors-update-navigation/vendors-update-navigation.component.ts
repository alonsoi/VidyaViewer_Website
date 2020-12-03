import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendorsAddComponent } from './vendors-add/vendors-add.component';

interface vendorArray{
  vendorName: string;
  vendorDescription: string;
  gamesAssociated: string;
}
@Component({
  selector: 'app-vendors-update-navigation',
  templateUrl: './vendors-update-navigation.component.html',
  styleUrls: ['./vendors-update-navigation.component.css']
})
export class VendorsUpdateNavigationComponent implements OnInit {

  vendor: vendorArray[]=[];
  constructor(public addVendorDialog: MatDialog, public updateVendorDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddVendor()
  {
    const addVendorDialog= this.addVendorDialog.open(VendorsAddComponent, {
      width: "500px"
    });

    addVendorDialog.afterOpened().subscribe(result =>{
      console.log('Add Vendor Dialog opened');
    })
  }

  onUpdateVendor()
  {
    const updateVendorDialog= this.updateVendorDialog.open(VendorsAddComponent, {
      width: "500px"
    });

    updateVendorDialog.afterOpened().subscribe(result => {
      console.log('Add Game Dialog opened');
    })
  }

}
