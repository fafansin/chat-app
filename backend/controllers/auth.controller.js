module.exports = {
  signup: async (req, res) => {
    try{
      // const { fullname, username, password, confirmPassword, gender } = req.body;
      console.log(req.body);
      res.json({status:'success', data:req.body})
    }catch(e){
      console.log(e, 'ERROR')
    }
  },
  login: (req, res) => {
    res.json({status:'success', message:'login'})
  },
  logout: (req, res) => {
    console.log('logout')
  }
}
