import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from '../store/reducer/customer.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [RegistrationFormComponent],
    imports: [
      CommonModule,
      StoreModule.forFeature(customerFeatureKey, reducer),
      ReactiveFormsModule,
      FlexLayoutModule,
      AngularMaterialModule,
    ],
    exports: [
      RegistrationFormComponent,
    ]
  })
  export class CustomerModule {
  }