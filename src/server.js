const express = require('express');
const { productsRoute } = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send('Hello world!');
});

app.use('/products', productsRoute);

const PORT = 3000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}.\nAccess: http://localhost:${PORT}`));
