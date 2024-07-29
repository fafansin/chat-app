const mongoose = require('mongoose');

module.exports = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {dbName:'chat-app'});
    console.log('Connected to MONGO DB');
  } catch (error) {
    console.log('Error DB Connection', error.message);
  }  
}
