/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { County } from './County';
export type Property = {
  id: string;
  county?: County;
  users?: Array<string>;
  filteredStatus?: string;
  filteredStatusDate?: string;
  initialScrape: boolean;
  ownerFirstName?: string;
  ownerLastName?: string;
  zpid?: string;
  streetAddress?: string;
  zipcode?: string;
  city?: string;
  state?: string;
  bedrooms?: number;
  bathrooms?: number;
  price?: number;
  homeType?: string;
  homeStatus?: string;
  homeStatusDate?: string;
  isOffMarket?: boolean;
  parcelId?: string;
  realtorName?: string;
  realtorPhone?: string;
  realtorCompany?: string;
  longitude?: number;
  latitude?: number;
  hasBadGeocode?: boolean;
  isUndisclosedAddress?: boolean;
  isNonOwnerOccupied?: boolean;
  livingAreaValue?: number;
  livingAreaUnitsShort?: string;
  daysOnZillow?: number;
  brokerageName?: string;
  propertyTypeDimension?: string;
  hdpTypeDimension?: string;
  listingTypeDimension?: string;
  url?: string;
  countyZillow?: string;
  photoCount?: number;
  photos?: Array<string>;
  createdAt?: string;
  updatedAt?: string;
};

