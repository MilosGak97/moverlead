/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrightdataVersion } from '../models/BrightdataVersion';
import type { FetchDataDto } from '../models/FetchDataDto';
import type { GetZillowUrlsForCountyDto } from '../models/GetZillowUrlsForCountyDto';
import type { RunScrapperV2Dto } from '../models/RunScrapperV2Dto';
import type { StartScrapperDto } from '../models/StartScrapperDto';
import type { TestScrapperDto } from '../models/TestScrapperDto';
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
      url: '/api/scrapper/reddis/trigger-scrapping',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerTestScrapper({
    requestBody,
  }: {
    requestBody: TestScrapperDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/test-scrapper',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Trigger brightdata
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerBrightdataEnrichmentTrigger({
    brightdataVersion,
  }: {
    brightdataVersion: BrightdataVersion,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/brightdata/trigger',
      query: {
        'brightdataVersion': brightdataVersion,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerBrightdataEnrichmentFiller({
    snapshotId,
    brightdataVersion,
  }: {
    snapshotId: string,
    brightdataVersion: 'BRIGHTDATA_DATASET_ID_V1' | 'BRIGHTDATA_DATASET_ID_V2',
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/brightdata/filler',
      query: {
        'snapshotId': snapshotId,
        'brightdataVersion': brightdataVersion,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerHasdataProperty(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/hasdata/trigger',
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
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerGetZillowUrlsForCounty({
    requestBody,
  }: {
    requestBody: GetZillowUrlsForCountyDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/get-zillow-urls-for-county',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public scrapperControllerRunScrapperV2({
    requestBody,
  }: {
    requestBody: RunScrapperV2Dto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scrapper/run-scrapper-v2',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
