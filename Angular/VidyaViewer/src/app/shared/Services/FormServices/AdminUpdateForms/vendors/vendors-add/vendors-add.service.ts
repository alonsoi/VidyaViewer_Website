import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VendorsAddService {

  constructor() { }

  formVendorAdd: FormGroup= new FormGroup({
    $vendorAddKey: new FormControl(null),
    vendorName: new FormControl('', Validators.required),
    vendorDescription: new FormControl('', Validators.required),
    vendorAddress: new FormControl()
  });

 /**Error with display when subform added */
 /**formVendorAddressAdd: FormGroup= new FormGroup({
    $vendorAddressKey: null,
    streetAddress: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    zip: new FormControl ('', [Validators.required,  Validators.minLength(5)])
  });*/

  initializeFormGroup()
  {
    this.formVendorAdd.setValue({
      $vendorAddKey:null,
      vendorName: '',
      vendorDescription: '',
      vendorAddress: ''
    })
    /**this.formVendorAddressAdd.setValue({
      $vendorAddressKey: null,
      streetAddress:'',
      city: '',
      zip: '',

    }); */
  }
}
