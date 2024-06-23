import dayjs from 'dayjs/esm';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 30225,
  title: 'music-making',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-23T01:33'),
};

export const sampleWithPartialData: IOrder = {
  id: 22686,
  title: 'ramen',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-22T19:47'),
};

export const sampleWithFullData: IOrder = {
  id: 7520,
  title: 'midst very batter',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-22T21:27'),
};

export const sampleWithNewData: NewOrder = {
  title: 'yippee enclose tremendously',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-22T14:00'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
