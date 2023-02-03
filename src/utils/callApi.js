// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

const getApi = async (urlLink) => {
  const config = {
    method: 'get',
    url: urlLink,
    headers: { },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

module.exports = { getApi };
