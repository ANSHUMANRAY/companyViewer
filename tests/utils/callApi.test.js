// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');
const callApi = require('../../src/utils/callApi');

describe('getApi', () => {
  it('should resolve data from api', async () => {
    const mockData = { a: test };
    jest.spyOn(axios, 'default').mockResolvedValue(mockData);
    const result = await callApi.getApi('test');
    expect(result).toEqual(mockData);
  });
});
