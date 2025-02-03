/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { RegisterDto } from '../models/RegisterDto';
import type { RegisterResponseDto } from '../models/RegisterResponseDto';
import type { ValidateUserDto } from '../models/ValidateUserDto';
import type { VerifyEmailDto } from '../models/VerifyEmailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthApi {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Login with a password
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerLogin({
    requestBody,
  }: {
    requestBody: ValidateUserDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Register a user
   * @returns RegisterResponseDto
   * @throws ApiError
   */
  public authControllerRegister({
    requestBody,
  }: {
    requestBody: RegisterDto,
  }): CancelablePromise<RegisterResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/register',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Logout
   * @returns any
   * @throws ApiError
   */
  public authControllerLogout(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/auth/logout',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public authControllerGetProfile(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/auth/who-am-i',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public authControllerVerifyEmail({
    requestBody,
  }: {
    requestBody: VerifyEmailDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/verify-email',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
