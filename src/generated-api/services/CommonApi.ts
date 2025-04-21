/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactFormWebhookDto } from '../models/ContactFormWebhookDto';
import type { PostcardFormWebhookDto } from '../models/PostcardFormWebhookDto';
import type { SubscribeToBlogDto } from '../models/SubscribeToBlogDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommonApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * General webhook
   * @returns any
   * @throws ApiError
   */
  public commonControllerContactFormWebhook({
    requestBody,
  }: {
    requestBody: ContactFormWebhookDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/common/webhook/contact-form',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * General webhook
   * @returns any
   * @throws ApiError
   */
  public commonControllerSubscribeToBlogWebhook({
    requestBody,
  }: {
    requestBody: SubscribeToBlogDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/common/webhook/subscribe-to-blog',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * General webhook
   * @returns any
   * @throws ApiError
   */
  public commonControllerPostcardFormWebhook({
    requestBody,
  }: {
    requestBody: PostcardFormWebhookDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/common/webhook/postcard-form',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
