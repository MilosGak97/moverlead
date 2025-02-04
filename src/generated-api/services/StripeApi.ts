/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PriceIdsDto } from '../models/PriceIdsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StripeApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public stripeControllerGetAllProducts(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/stripe/products',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public stripeControllerGetProduct({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/stripe/products/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public stripeControllerGetAllPrices({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/stripe/prices/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public stripeControllerCreateCheckoutSessionMultiple({
    requestBody,
  }: {
    requestBody: PriceIdsDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/stripe/checkout-session/multiple',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public stripeControllerCreateCheckoutSession({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/stripe/checkout-session/single/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public stripeControllerHandleStripeWebhook(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/stripe/webhook',
    });
  }
}
