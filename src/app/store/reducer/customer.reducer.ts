import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import {Customer} from '../../models/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customer: Customer;
}

export const initialState: CustomerState = {
  customer: new Customer()
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer,
    (state: CustomerState, {customer}) =>
      ({...state,
      customer
      }))
);
export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}


