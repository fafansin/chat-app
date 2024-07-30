const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken.js')

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
      if(newUser){
        generateToken(newUser._id, res);
        await newUser.save();
      
        res.status(201).json({
          _id:newUser._id,
          fullname:newUser,fullname
        })
      }else{
        res.status(400).json({error:"Invalid user data"});
      }

      
    }catch(e){
      console.log("Error in signup controller", e.message);
      res.status(500).json({error:'Internal Server Error'});
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});

    if(!user) return res.json({message:'User not found'});
    
    if(bcrypt.compareSync(password, user.password)){
      res.json({message:'User Logged in!'})
    }else{
      res.json({message:'Wrong Passowrd'})
    }
  },
  logout: (req, res) => {
    console.log('logout')
  }
}
