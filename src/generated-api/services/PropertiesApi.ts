/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveStatesResponseDto } from '../models/ActiveStatesResponseDto';
import type { County } from '../models/County';
import type { FilteringActionDto } from '../models/FilteringActionDto';
import type { FilteringResponseDto } from '../models/FilteringResponseDto';
import type { GetDashboardResponseDto } from '../models/GetDashboardResponseDto';
import type { GetListingsResponseDto } from '../models/GetListingsResponseDto';
import type { GetSubscriptionsResponseDto } from '../models/GetSubscriptionsResponseDto';
import type { ListingsExportDto } from '../models/ListingsExportDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
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
   * @returns GetListingsResponseDto
   * @throws ApiError
   */
  public propertiesControllerGetListings({
    filteredStatus,
    propertyStatus,
    state,
    propertyValueFrom,
    propertyValueTo,
    dateFrom,
    dateTo,
    limit,
    offset,
  }: {
    filteredStatus?: Array<'FURNISHED' | 'EMPTY' | 'NO_DATA'>,
    propertyStatus?: Array<'COMING_SOON' | 'FOR_SALE' | 'PENDING'>,
    state?: Array<string>,
    propertyValueFrom?: number,
    propertyValueTo?: number,
    dateFrom?: string,
    dateTo?: string,
    limit?: number,
    offset?: number,
  }): CancelablePromise<GetListingsResponseDto> {
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
        'limit': limit,
        'offset': offset,
      },
    });
  }
  /**
   * Trigger export action for selected listings with usps needed fields
   * @returns any
   * @throws ApiError
   */
  public propertiesControllerListingsExportDetailed({
    requestBody,
  }: {
    requestBody: ListingsExportDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/listings/export/detailed',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Trigger export action for selected listings with usps needed fields
   * @returns any
   * @throws ApiError
   */
  public propertiesControllerListingsExportUsps({
    requestBody,
  }: {
    requestBody: ListingsExportDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/listings/export/usps',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Trigger export action for selected listings with usps needed fields
   * @returns any
   * @throws ApiError
   */
  public propertiesControllerGetHomeowners({
    requestBody,
  }: {
    requestBody: ListingsExportDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/properties/listings/get-homeowners',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Listings / show property that is not filtered
   * @returns FilteringResponseDto
   * @throws ApiError
   */
  public propertiesControllerFiltering({
    limit,
    offset,
  }: {
    limit?: number,
    offset?: number,
  }): CancelablePromise<FilteringResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/filtering',
      query: {
        'limit': limit,
        'offset': offset,
      },
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
   * Get all active states
   * @returns ActiveStatesResponseDto
   * @throws ApiError
   */
  public propertiesControllerGetActiveStates(): CancelablePromise<ActiveStatesResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/properties/active-states',
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
