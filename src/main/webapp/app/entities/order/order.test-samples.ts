import dayjs from 'dayjs/esm';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 31510,
  title: 'debase glory',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-22T16:37'),
};

export const sampleWithPartialData: IOrder = {
  id: 13237,
  title: 'gah',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-22T10:23'),
};

export const sampleWithFullData: IOrder = {
  id: 17069,
  title: 'failing for complement',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-23T06:48'),
};

export const sampleWithNewData: NewOrder = {
  title: 'until oof woot',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-23T00:20'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
