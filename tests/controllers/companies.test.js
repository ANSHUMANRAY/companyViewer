// const jest = require('jest');
const services = require('../../src/services/companies');
const controllers = require('../../src/controllers/companies');
// const HTTPError = require('../../src/utils/httpError');

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

describe('controllers getData', () => {
  it('should resolve value', async () => {
    const mockReq = { query: { sector: 'something' } };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    const testData = { a: test, b: test };
    jest.spyOn(services, 'getTopRankedCompanies').mockResolvedValue(testData);
    await controllers.getData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(testData);
  });
});

describe('controllers getData error case', () => {
  it('should throw error when internal failure occurs', async () => {
    const mockReq = { query: { sector: 'something' } };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    jest.spyOn(services, 'getTopRankedCompanies').mockRejectedValue(new Error('error'));
    await controllers.getData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({ message: 'Internal server error' });
  });
});

describe('controllers updateData', () => {
  it('should resolve data', async () => {
    const mockReq = {
      params: { id: 333 },
      body: { a: test },
    };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    jest.spyOn(services, 'updateData').mockResolvedValue({ a: test, b: test });
    await controllers.patchData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(204);
    expect(mockRes.json).toBeCalledWith('updated successfully');
  });
});

describe('controllers updateData error cases', () => {
  it('should respond error', async () => {
    const mockReq = {
      params: { id: 333 },
      body: { a: test },
    };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    jest.spyOn(services, 'updateData').mockRejectedValue(new Error('error'));
    await controllers.patchData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({ message: 'Internal server error' });
  });
});
