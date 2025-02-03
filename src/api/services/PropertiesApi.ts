/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilteringActionDto } from '../models/FilteringActionDto';
import type { FilteringResponseDto } from '../models/FilteringResponseDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { Property } from '../models/Property';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PropertiesApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    filteredStatus?: Array<string>,
    propertyStatus?: Array<string>,
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
}
