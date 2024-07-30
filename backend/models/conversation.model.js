const mongoose = require('mongoose');

module.exports = new mongoose.Model('Conversation', new mongoose.Schema({
  participants:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    messages:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
        default:[]
      }
    ]
  ]
}, {timestamps:true}))