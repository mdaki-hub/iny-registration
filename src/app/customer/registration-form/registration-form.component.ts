import { Component, OnChanges, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import {Customer} from '../../models/customer';
import {addCustomer} from '../../store/action/customer.actions';
import {CustomerState} from '../../store/reducer/customer.reducer';

import {selectCustomers} from '../../store/selector/customer.selectors';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  customers$: Observable<Customer>;

  profileForm = this.fb.group({
    gender: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
    nationality: ['', Validators.required],
  });

  constructor(private store: Store<CustomerState>, private fb: FormBuilder) { 
    this.customers$ = this.store.select(selectCustomers);
  }

  ngOnInit() {
   this.customers$.subscribe((customerData: Customer) => {
     this.profileForm.patchValue({
       gender: customerData.gender,
       firstName: customerData.firstName,
       lastName: customerData.lastName,
       dob: customerData.dob,
       nationality: customerData.nationality
     })
   })
  }


  onSubmit() {
    const customer = new Customer();
    customer.gender = this.profileForm.controls['gender'].value;
    customer.firstName = this.profileForm.controls['firstName'].value;
    customer.lastName = this.profileForm.controls['lastName'].value;
    customer.dob = this.profileForm.controls['dob'].value;
    customer.nationality = this.profileForm.controls['nationality'].value;
    this.store.dispatch(addCustomer(customer));
  }

}
