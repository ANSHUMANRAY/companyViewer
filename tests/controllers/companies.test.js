// const jest = require('jest');
const services = require('../../src/services/companies');
const controllers = require('../../src/controllers/companies');
const HTTPError = require('../../src/utils/httpError');

describe('postData error cases', () => {
  it('should throw an error', async () => {
    const req = { body: { urlLink: 'something' } };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    jest.spyOn(services, 'saveData').mockRejectedValue(new Error('Error'));
    await controllers.postData(req, res);
    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({ message: 'Internal server Error' });
  });
});
describe('controllers postData', () => {
  it('should resolve data when a valid url is sent', async () => {
    jest.spyOn(services, 'saveData').mockResolvedValue(true);
    const mockReq = { body: { urlLink: 'something' } };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    await controllers.postData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith({ message: 'saved to database' });
  });
});

describe('controllers getData error cases', () => {
  it('should throw error when internal failure occurs', async () => {
    jest.spyOn(services, 'getTopRankedCompanies').mockRejectedValue(new HTTPError('Not found', 404));
    const mockReq = { query: { sector: 'something' } };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    await controllers.getData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.json).toBeCalledWith({ message: 'Not found' });
  });
});
