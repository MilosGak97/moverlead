/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCheckoutSessionDto } from '../models/CreateCheckoutSessionDto';
import type { CreateCheckoutSessionResponseDto } from '../models/CreateCheckoutSessionResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StripeApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Create stripe checkout
   * @returns CreateCheckoutSessionResponseDto
   * @throws ApiError
   */
  public stripeControllerCreateCheckoutSessionMultiple({
    requestBody,
  }: {
    requestBody: CreateCheckoutSessionDto,
  }): CancelablePromise<CreateCheckoutSessionResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/stripe/checkout-session/multiple',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Webhook for stripe
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
