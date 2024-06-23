import { IEmployeeInformation, NewEmployeeInformation } from './employee-information.model';

export const sampleWithRequiredData: IEmployeeInformation = {
  id: 5243,
  name: 'anarchist anxiety',
  handle: 'immense er injustice',
};

export const sampleWithPartialData: IEmployeeInformation = {
  id: 30592,
  name: 'despite easily frantically',
  handle: 'without',
};

export const sampleWithFullData: IEmployeeInformation = {
  id: 31385,
  name: 'visualize cruise',
  handle: 'toffee woozy puma',
};

export const sampleWithNewData: NewEmployeeInformation = {
  name: 'exactly anenst startle',
  handle: 'uh-huh with while',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
