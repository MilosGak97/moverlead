import { OpenAPIConfig, MoverLeadApi } from '../generated-api';

import { CustomAxiosHttpRequest } from './customAxiosClient';

import { environmentVariables } from '../env/environmentVariables';

const config: Partial<OpenAPIConfig> = {
  BASE: environmentVariables.baseApiUrl,
  CREDENTIALS: 'include',
  VERSION: '1',
};

export const api = new MoverLeadApi(config, CustomAxiosHttpRequest);
