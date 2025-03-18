/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { County } from '../models/County';
import type { FetchSnapshotDto } from '../models/FetchSnapshotDto';
import type { FilteringActionDto } from '../models/FilteringActionDto';
import type { FilteringResponseDto } from '../models/FilteringResponseDto';
import type { GetDashboardResponseDto } from '../models/GetDashboardResponseDto';
import type { GetSubscriptionsResponseDto } from '../models/GetSubscriptionsResponseDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { Property } from '../models/Property';
import type { StateResponseDto } from '../models/StateResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PropertiesApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Fetch last month, this month and today count data
   * @returns GetDashboardResponseDto
   * @throws ApiError
   */
  public propertiesControllerGetDashboard(): CancelablePromise<GetDashboardResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/dashboard',
    });
  }
  /**
   * Show Listings
   * @returns Property
   * @throws ApiError
   */
  public propertiesControllerListings({
    filteredStatus,
    propertyStatus,
    state,
    propertyValueFrom,
    propertyValueTo,
    dateFrom,
    dateTo,
  }: {
    filteredStatus?: Array<'FURNISHED' | 'EMPTY' | 'NO_DATA' | 'NOT_FILTERED'>,
    propertyStatus?: Array<'COMING_SOON' | 'FOR_SALE' | 'PENDING'>,
    state?: Array<string>,
    propertyValueFrom?: number,
    propertyValueTo?: number,
    dateFrom?: string,
    dateTo?: string,
  }): CancelablePromise<Array<Property>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/listings',
      query: {
        'filteredStatus': filteredStatus,
        'propertyStatus': propertyStatus,
        'state': state,
        'propertyValueFrom': propertyValueFrom,
        'propertyValueTo': propertyValueTo,
        'dateFrom': dateFrom,
        'dateTo': dateTo,
      },
    });
  }
  /**
   * Listings / show property that is not filtered
   * @returns FilteringResponseDto
   * @throws ApiError
   */
  public propertiesControllerFiltering(): CancelablePromise<FilteringResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/filtering',
    });
  }
  /**
   * Action for property filtering
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public propertiesControllerFilteringAction({
    id,
    requestBody,
  }: {
    id: string,
    requestBody: FilteringActionDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/filtering/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * List all states
   * @returns StateResponseDto
   * @throws ApiError
   */
  public propertiesControllerListStates(): CancelablePromise<Array<StateResponseDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/state',
    });
  }
  /**
   * Manually run the scrapper per brightdata ID
   * @returns any
   * @throws ApiError
   */
  public propertiesControllerFetchSnapshotData({
    requestBody,
  }: {
    requestBody: FetchSnapshotDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/no-ui/fetch-snapshot-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * List products by state
   * @returns County
   * @throws ApiError
   */
  public propertiesControllerGetProducts({
    state,
  }: {
    state: 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY' | 'DC',
  }): CancelablePromise<Array<County>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/products',
      query: {
        'state': state,
      },
    });
  }
  /**
   * Get all active subscriptions for user
   * @returns GetSubscriptionsResponseDto
   * @throws ApiError
   */
  public propertiesControllerGetSubscriptions({
    stripeSubscriptionStatus,
  }: {
    stripeSubscriptionStatus: 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'paused',
  }): CancelablePromise<Array<GetSubscriptionsResponseDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/subscriptions',
      query: {
        'stripeSubscriptionStatus': stripeSubscriptionStatus,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public propertiesControllerProcessCsvFile(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/process',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public propertiesControllerWebhook({
    webhookSecret,
    daysOnZillow,
  }: {
    webhookSecret: string,
    daysOnZillow: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/webhook',
      query: {
        'webhookSecret': webhookSecret,
        'daysOnZillow': daysOnZillow,
      },
    });
  }
}
