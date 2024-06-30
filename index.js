const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRoutes = require('./routes/userRoutes');
const swaggerSetup = require('./swagger');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);

swaggerSetup(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
