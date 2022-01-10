const express = require('express');
const newRouter = express.Router();
const axios = require('axios');



newRouter.get("/",(req, res)=>{
    res.render('index');
});
newRouter.get('/admin/login',(req, res)=>{
    res.render('admin/login');
})

newRouter.get('/admin/dashboard',(req, res)=>{
    res.render('admin/dashboard');
})
newRouter.get('/admin/tables',(req, res)=>{
    res.render('admin/tables');
})

newRouter.post('/login/superAdmin',(req, res)=>{
    let email = req.body.email
    let password = req.body.password
axios({
    method: 'post',
    url: 'http://127.0.0.1:5000/super/login',
    data: {
      email: this.email,
      password: '12345m'
    }
  })
  .then(function (response) {
    console.log(response);
    res.render('admin/dashboard');
  })
  .catch(function (error) {
    res.render('index');

    console.log(error);
  });

 
  console.log('success');
})



module.exports = newRouter ;