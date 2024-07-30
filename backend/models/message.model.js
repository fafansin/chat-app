const mongoose = require('mongoose');

module.exports = new mongoose.model('Message', new mongoose.Schema({
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  message:{
    type:String,
    required: true
  }
}, {timestamps:true}))