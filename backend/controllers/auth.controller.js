const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');

module.exports = {
  signup: async (req, res) => {
    try{
      const { fullname, username, password, confirmPassword, gender } = req.body;

      if(password !== confirmPassword){
        return res.status(400).json({error:'Passwords did not match'})
      }

      const user = await User.findOne({username});
      if(user){
        return res.status(400).json({error:'User already exists'});
      }

      const profilePic = `https://avatar.iran.liara.run/public/${gender === 'male' ? 'boy' : 'girl'}?username=${username}`;

      const salt = 10;
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        fullname,
        username,
        password:hash,
        gender,
        profilePic
      })

      await newUser.save();
      
      res.status(201).json({
        _id:newUser._id,
        fullname:newUser,fullname
      })
      
    }catch(e){
      console.log("Error in signup controller", e.message);
      res.status(500).json({error:'Internal Server Error'});
    }
  },
  login: (req, res) => {
    res.json({status:'success', message:'login'})
  },
  logout: (req, res) => {
    console.log('logout')
  }
}
