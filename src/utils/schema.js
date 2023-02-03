// eslint-disable-next-line import/no-extraneous-dependencies
const joi = require('joi');

const postSchema = joi.object({
  urlLink: joi.string().required(),
});

const getSchema = joi.object({
  sector: joi.string().required(),
});

module.exports = { postSchema, getSchema };
