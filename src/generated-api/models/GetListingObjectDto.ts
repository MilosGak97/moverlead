/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetListingObjectDto = {
  id: string;
  fullName: string;
  filteredStatus?: 'FURNISHED' | 'EMPTY' | 'NO_DATA';
  propertyStatus: 'COMING_SOON' | 'FOR_SALE' | 'PENDING';
  propertyStatusDate: string;
  fullAddress: string;
  state: string;
  bedrooms?: number;
  bathrooms?: number;
  price?: string;
  homeType: string;
  realtorName?: string;
  realtorPhone?: string;
  brokerageName?: string;
  brokeragePhone?: string;
};

