const express = require('express');
const authRoutes = require('./routes/auth.routes.js');
const connectToMongoDB = require('./db/connectToMongoDB.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Home Page');
})

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
  connectToMongoDB();
})