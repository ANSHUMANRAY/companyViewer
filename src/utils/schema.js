// eslint-disable-next-line import/no-extraneous-dependencies
const joi = require('joi');

const postSchema = joi.object({
  urlLink: joi.string().required(),
});

module.exports = { postSchema };
