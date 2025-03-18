/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ScrapperApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerRunScrapper(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper',
    });
  }
}
