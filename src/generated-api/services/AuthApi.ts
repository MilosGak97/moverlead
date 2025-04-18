/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForgotPasswordRequestDto } from '../models/ForgotPasswordRequestDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { RegisterDto } from '../models/RegisterDto';
import type { ResetPasswordDto } from '../models/ResetPasswordDto';
import type { ValidateUserDto } from '../models/ValidateUserDto';
import type { WhoAmIResponse } from '../models/WhoAmIResponse';
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
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerRegister({
    requestBody,
  }: {
    requestBody: RegisterDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/register',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Send a verification email
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerSendVerificationEmail(): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/verify/verify-email',
    });
  }
  /**
   * Endpoint for JWT token from verify email link
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerVerifyEmail({
    token,
  }: {
    token: string,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/auth/verify/verify-email/{token}',
      path: {
        'token': token,
      },
    });
  }
  /**
   * Forgot password
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerForgotPassword({
    requestBody,
  }: {
    requestBody: ForgotPasswordRequestDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/forgot-password',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Reset password validation
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerForgotPasswordValidation({
    token,
  }: {
    token: string,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/auth/reset-password/{token}',
      path: {
        'token': token,
      },
    });
  }
  /**
   * Reset password after token validation
   * @returns MessageResponseDto
   * @throws ApiError
   */
  public authControllerResetPassword({
    requestBody,
  }: {
    requestBody: ResetPasswordDto,
  }): CancelablePromise<MessageResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/reset-password',
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
   * who-am-i endpoint
   * @returns WhoAmIResponse
   * @throws ApiError
   */
  public authControllerGetProfile(): CancelablePromise<WhoAmIResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/auth/who-am-i',
    });
  }
}
