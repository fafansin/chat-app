const Message = require('../models/message.model.js');
const Conversation = require('../models/conversation.model.js');

module.exports = {
  sendMessage: async (req, res) => {
    try{
      const { message } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id; 

      let conversation = await Conversation.findOne({
        participants:{$all: [senderId, receiverId]}
      })

      if(!conversation){
        conversation = await Conversation.create({
          participants: [senderId, receiverId]
        })
      }

      const newMessage = new Message({
        senderId,
        receiverId,
        message
      })

      if(newMessage){
        conversation.messages.push(newMessage._id);
      }

      await Promise.all([newMessage.save(),conversation.save()])
      
      res.status(201).json(newMessage);

    }catch(e){
      console.log('Error in sendMessage controller:', e.message);
      res.status(500).json({error:'Internal Server Error'});
    }
    
  }
}