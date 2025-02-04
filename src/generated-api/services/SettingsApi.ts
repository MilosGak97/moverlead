/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordDto } from '../models/ChangePasswordDto';
import type { GetCompanyResponseDto } from '../models/GetCompanyResponseDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { PatchCompanyDto } from '../models/PatchCompanyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingsApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns GetCompanyResponseDto
   * @throws ApiError
   */
  public settingsControllerGetCompany(): CancelablePromise<GetCompanyResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/settings/company',
    });
  }
  /**
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public settingsControllerPatchCompany({
    requestBody,
  }: {
    requestBody: PatchCompanyDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/settings/company',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public settingsControllerChangePassword({
    requestBody,
  }: {
    requestBody: ChangePasswordDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/settings/password',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
