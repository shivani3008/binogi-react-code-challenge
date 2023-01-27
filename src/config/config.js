module.exports = {
  api: {
    BASE_URL: 'https://api.edamam.com',
    APP_ID: 'df53c267',
    APP_KEY: 'bd80595496a524a833554462aa41a04c',
  },
  HTTP_METHODS: {
    GET: 'GET',
  },
  URLS: (BASE_URL) => ({
    GET_RECIPES: (query) => `${BASE_URL}/api/recipes/v2?${query}`,
  }),
};
