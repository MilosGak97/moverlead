import axios from 'axios';
import {
  BaseHttpRequest,
  CancelablePromise,
  OpenAPIConfig,
} from '../generated-api';
import { ApiRequestOptions } from '../generated-api/core/ApiRequestOptions';

import { request } from './axiosInterceptors';

export class CustomAxiosHttpRequest extends BaseHttpRequest {
  axiosInstance = axios.create({
    withCredentials: true,
  });

  constructor(config: OpenAPIConfig) {
    super(config);
  }

  public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return request(this.config, options, this.axiosInstance);
  }
}
