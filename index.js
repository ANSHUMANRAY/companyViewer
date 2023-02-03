const express = require('express');
const companies = require('./src/routes/companies');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', companies);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000.');
});
