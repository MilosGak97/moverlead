/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrightdataEnrichmentFillerDto } from '../models/BrightdataEnrichmentFillerDto';
import type { FetchDataDto } from '../models/FetchDataDto';
import type { StartScrapperDto } from '../models/StartScrapperDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ScrapperApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerStartScrapper({
    requestBody,
  }: {
    requestBody: StartScrapperDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerBrightdataFiller({
    requestBody,
  }: {
    requestBody: BrightdataEnrichmentFillerDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/brightdata-filler',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerFetchData({
    requestBody,
  }: {
    requestBody: FetchDataDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/fetch-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerCancelAllJobs(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/cancel-all',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerResumeQueue(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/resume',
    });
  }
}
