const services = require('../services/companies');

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

module.exports = { postData };
