// eslint-disable-next-line import/no-extraneous-dependencies
const joi = require('joi');

const postSchema = joi.object({
  urlLink: joi.string().required(),
});

const getSchema = joi.object({
  sector: joi.string().required(),
});

const patchSchemaParams = joi.object({
  id: joi.string().required(),
});

const patchSchemaRequest = joi.object({
  ceo: joi.string(),
  address: joi.string(),
});
module.exports = {
  postSchema, getSchema, patchSchemaParams, patchSchemaRequest,
};
