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
  public stripeControllerHandleStripeWebhook(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/stripe/webhook',
    });
  }
}
