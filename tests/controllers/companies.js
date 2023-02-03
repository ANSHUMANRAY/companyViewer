const jest = require('jest');
const services = require('../../src/services/companies');
const controllers = require('../../src/controllers/companies');

describe('getAllTasks error cases', () => {
  it('should throw an error', async () => {
    const req = { urlLink: 'something' };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    jest.spyOn(services, 'saveData').mockRejectedValue(new Error('Error'));
    await controllers.postData(req, res);
    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({ message: 'Internal server error' });
  });
});
describe('controllers postData', () => {
  it('should resolve data when a valid url is sent', async () => {
    jest.spyOn(services, 'saveData').mockResolvedValue(true);
    const mockReq = { urlLink: 'xyz' };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    await controllers.postData(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith({ message: 'saved to database' });
  });
});
