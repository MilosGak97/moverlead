/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionItemsDto } from './SubscriptionItemsDto';
export type GetSubscriptionsResponseDto = {
  id?: string;
  /**
   * Unix timestamp in seconds
   */
  currentPeriodStart?: string;
  /**
   * Unix timestamp in seconds
   */
  currentPeriodEnd?: string;
  status?: string;
  subscriptionItems?: Array<SubscriptionItemsDto>;
  totalPrice?: number;
};

