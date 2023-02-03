const services = require('../services/companies');
const HTTPError = require('../utils/httpError');

const postData = async (req, res) => {
  try {
    const { urlLink } = req.body;
    await services.saveData(urlLink);
    res.status(201);
    res.json({ message: 'saved to database' });
  } catch (err) {
    res.status(500);
    res.json({ message: 'Internal server Error' });
  }
};

const getData = async (req, res) => {
  try {
    const { sector } = req.query;
    const data = await services.getTopRankedCompanies(sector);
    res.status(200);
    res.json(data);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code);
      res.json({ message: error.message });
    } else {
      res.status(500);
      res.json({ message: 'Internal server error' });
    }
  }
};

const patchData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await services.updateData(data, id);
    res.status(204);
    res.json('updated successfully');
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code);
      res.json({ message: error.message });
    } else {
      res.status(500);
      res.json({ message: 'Internal server error' });
    }
  }
};

module.exports = { postData, getData, patchData };
