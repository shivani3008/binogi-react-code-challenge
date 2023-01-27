import queryString from 'query-string';

import config from 'config/config';
import createRequest from './request';

export const fetchRecipes = async (filters) => {
  const { send } = createRequest({
    url: config
      .URLS(config.api.BASE_URL)
      .GET_RECIPES(queryString.stringify(filters, { skipEmptyString: true, arrayFormat: 'comma' })),
    method: config.HTTP_METHODS.GET,
  });

  const result = await send();

  return result.data;
};
