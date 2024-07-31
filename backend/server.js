const express = require('express');
const authRoutes = require('./routes/auth.routes.js');
const messageRoutes = require('./routes/message.routes.js');
const userRoutes = require('./routes/user.routes.js');
const connectToMongoDB = require('./db/connectToMongoDB.js');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Home Page');
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
  connectToMongoDB();
})