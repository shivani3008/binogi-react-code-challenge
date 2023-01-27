import axios, { CancelToken } from 'axios';
import queryString from 'query-string';

import config from 'config/config';

const getRequestOptions = (options) => {
  const { url, query } = queryString.parseUrl(options.url);

  query.app_id = config.api.APP_ID;
  query.app_key = config.api.APP_KEY;
  query.type = 'public';

  return {
    ...options,
    url: queryString.stringifyUrl({ url, query }),
  };
};

const createRequest = (options) => {
  let cancel;

  const send = () =>
    axios({
      ...getRequestOptions(options),
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    });

  return { send, cancel };
};

export default createRequest;
