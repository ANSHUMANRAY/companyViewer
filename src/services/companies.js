const callApi = require('../utils/callApi');
const db = require('../../db/models');

const { companies } = db;

const saveData = async (urlLink) => {
  try {
    const csvData = await callApi.getApi(urlLink);
    let csvArray = csvData.toString().split('\n');
    //   const headers = csvArray[0];
    csvArray = csvArray.splice(1);

    csvArray.forEach(async (element) => {
      const elem = element.split(',');
      const id = elem[0];
      const sector = elem[1];
      const detailsById = await callApi.getApi(`http://54.167.46.10/company/${id}`);
      const detailsBySector = await callApi.getApi(`http://54.167.46.10/sector?name=${sector}`);
      const reqCompany = detailsBySector.filter((company) => company.companyId === id);
      const index = reqCompany.performanceByIndex;
      const score = (index[0].value * 10
        + index[1].value / 10000
        + index[2].value * 10
        + index[2].value) / 4;
      const data = {
        companyId: detailsById.id,
        name: detailsById.name,
        tags: detailsById.tags,
        ceo: detailsById.ceo,
        numberEmployees: detailsById.numberEmployees,
        score,
      };
      await companies.create(data);
    });
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { saveData };