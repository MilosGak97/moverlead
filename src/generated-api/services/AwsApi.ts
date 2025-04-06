/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FailedScrapperResponseDto } from '../models/FailedScrapperResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AwsApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public awsControllerReadResults({
    key,
  }: {
    key: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/aws/read-results/{key}',
      path: {
        'key': key,
      },
    });
  }
  /**
   * @returns FailedScrapperResponseDto
   * @throws ApiError
   */
  public awsControllerCheckFailedScrapper(): CancelablePromise<FailedScrapperResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/aws/snapshots/failed',
    });
  }
}
