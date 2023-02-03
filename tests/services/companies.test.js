const services = require('../../src/services/companies');
const db = require('../../db/models');
const HTTPError = require('../../src/utils/httpError');

const { Companies } = db;

describe('getTopRankedCompanies error cases', () => {
  it('should throw error when falsy value is recieved', async () => {
    jest.spyOn(Companies, 'findAll').mockResolvedValue(null);
    await expect(services.getTopRankedCompanies('test')).rejects.toThrow(new HTTPError('Not found', 404));
  });
});

describe('getTopRankedCompanies', () => {
  it('should return data when given a sector', async () => {
    const testValue = { a: test, b: test };
    jest.spyOn(Companies, 'findAll').mockResolvedValue(testValue);
    const data = await services.getTopRankedCompanies('test');
    expect(data).toEqual(testValue);
  });
});
