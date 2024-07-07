const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('./db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
require('./passportConfig'); // Ensure passportConfig is loaded

const app = express();
app.use(bodyParser.json());

// Set up session management
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const swaggerSetup = require('./swagger');
swaggerSetup(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
