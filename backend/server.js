const express = require('express');
const authRoutes = require('./routes/auth.routes.js');

const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
})

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})