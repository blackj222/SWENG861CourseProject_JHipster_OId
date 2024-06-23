import { IItem, NewItem } from './item.model';

export const sampleWithRequiredData: IItem = {
  id: 24271,
  asin: 'bah pyramid',
};

export const sampleWithPartialData: IItem = {
  id: 26167,
  asin: 'if same',
  productTitle: 'cleft excepting associate',
  productPrice: 'psst',
  currency: 'yum up free',
  productStarRating: 'a flowery whoa',
  productPhoto: 'vessel',
  productMinimumOfferPrice: 'er in stereotype',
  isBestSeller: true,
  isAmazonChoice: true,
  delivery: 'now overprint',
};

export const sampleWithFullData: IItem = {
  id: 16406,
  asin: 'send ack now',
  productTitle: 'about',
  productPrice: 'cheap',
  productOriginalPrice: 'pfft suspiciously rudely',
  currency: 'dilapidation inset gah',
  productStarRating: 'meal',
  productNumRatings: 12400,
  productUrl: 'likely',
  productPhoto: 'lowball than',
  productNumOffers: 17959,
  productMinimumOfferPrice: 'ultimately reconstitute bulky',
  isBestSeller: true,
  isAmazonChoice: false,
  isPrime: true,
  climatePledgeFriendly: false,
  salesVolume: 'highly',
  delivery: 'violently barrack',
  couponText: 'extremely once wisely',
};

export const sampleWithNewData: NewItem = {
  asin: 'those gosh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
