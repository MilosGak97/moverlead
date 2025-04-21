/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AuthApi } from './services/AuthApi';
import { AwsApi } from './services/AwsApi';
import { CommonApi } from './services/CommonApi';
import { PropertiesApi } from './services/PropertiesApi';
import { ScrapperApi } from './services/ScrapperApi';
import { SettingsApi } from './services/SettingsApi';
import { StripeApi } from './services/StripeApi';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class MoverLeadApi {
  public readonly auth: AuthApi;
  public readonly aws: AwsApi;
  public readonly common: CommonApi;
  public readonly properties: PropertiesApi;
  public readonly scrapper: ScrapperApi;
  public readonly settings: SettingsApi;
  public readonly stripe: StripeApi;
  public readonly request: BaseHttpRequest;
  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.auth = new AuthApi(this.request);
    this.aws = new AwsApi(this.request);
    this.common = new CommonApi(this.request);
    this.properties = new PropertiesApi(this.request);
    this.scrapper = new ScrapperApi(this.request);
    this.settings = new SettingsApi(this.request);
    this.stripe = new StripeApi(this.request);
  }
}

