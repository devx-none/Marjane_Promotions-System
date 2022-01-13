const express = require('express');
const newRouter = express.Router();
const axios = require('axios');


if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}


newRouter.get("/",(req, res)=>{
    res.render('index');
});
newRouter.get('/admin/login',(req, res)=>{
    res.render('admin/login');
})

newRouter.get("/admin/dashboard",(req, res)=>{
  res.render('admin/dashboard');
})
newRouter.get('/admin/tables',(req, res)=>{
  res.render('admin/tables');
})

newRouter.get('/adminCenter/login',(req, res)=>{
  res.render('subAdmin/login');
})

//page login manager
newRouter.get('/manager/login',(req, res)=>{
  res.render('Manager/login');
})
//manger dashboard
newRouter.get('/manager/dashboard',(req, res)=>{
  res.render('Manager/dashboard');
})
//manager tables
newRouter.get('/manager/tables',(req, res)=>{
  res.render('Manager/tables');
})

// admin center dashboard
newRouter.get('/adminCenter/dashboard',(req, res)=>{
  res.render('subAdmin/dashboard');
})

//admin center table
newRouter.get('/adminCenter/tables',(req, res)=>{
  res.render('subAdmin/tables');
})

//page promotion 
newRouter.get('/adminCenter/promotions',(req, res)=>{
  res.render('subAdmin/promotions');

})

//list admin center
// newRouter.get('/admin/tables',(req, res)=>{
 

//   axios.all([axios.get(`http://127.0.0.1:5000/admin/all`),
//   axios.get(`http://localhost:5000/center/all`)])
// .then(axios.spread((admins, centers) => {  
//       res.render('admin/tables',{adminsCenter : admins.data ,centers : centers.data });

// console.log(admins.data,centers.data);
// }))
// .catch(error => console.log(error));

 
//   console.log('success');
// })




newRouter.get('/admin/tables',(req, res)=>{
    res.render('admin/tables');
})



//login admin super
newRouter.post('/login/superAdmin',(req, res)=>{

  const {email,password} = req.body ;
  console.log(email);
    console.log(password);
axios({
    method: 'post',
    url: 'http://127.0.0.1:5000/super/login',
    data: {
      email: email,
      password: password
    }
  })
  .then( (response) =>{
    
    console.log(response);
    console.log(`token ::${response.data.token}`);
    res.render('admin/dashboard',{token:response.data.token});
  })
  .catch(function (error) {
    

    console.log(error);
  });

 
  console.log('success');
})





// add an admin center
// newRouter.post('/super/adCenter',(req, res)=>{
//   console.log("rani mchit backend");
//   const email = req.body.email;
//   const center = req.body.center;
//   const admin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkZDJmM2U1LWJmZTMtNDNlNy05ZjliLWFiNDg1MTM1NWYyZCIsImVtYWlsIjoiZWxtYWhkaUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE2NDIwMTg0NTYsImV4cCI6MTY0MjEwNDg1Nn0.pG7o7CdyCe5okHUJsmptB229sqWsLGabGJ8AFIOauM';
//   console.log(admin);
//   axios
//     .post("http://127.0.0.1:5000/super/adCenter", {
//       data: {
//         email: email,
//         centerId: center
//       },
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         'Authorization': `Bearer ${admin}`,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch(function (error ) {
//       console.log(error);
//     });


// });
  
//login admin center

newRouter.post('/adminCenter/login',(req, res)=>{

  const {email,password} = req.body ;
  
axios({
    method: 'post',
    url: 'http://localhost:5000/admin/login',
    data: {
      email: email,
      password: password
    }
  })
  .then( (response) =>{
    
    console.log(response);
    localStorage.setItem('adminCenter',response.data.token)
    console.log(`token :${localStorage.getItem('adminCenter')}`);
    res.render('subAdmin/dashboard');
  })
  .catch(function (error) {
    

    console.log(error);
  });

 
})

//create manager
newRouter.post('/manager/new',(req, res)=>{
  const email = req.body.email;
  const name = req.body.name;
  // const center = req.body.center;
  const category = req.body.category;
  const adminCenter = localStorage.getItem("adminCenter");
  // admins.adminCenter(email, admin);
  axios
    .post("http://localhost:5000/admin/addManger", {
      data: {
        name : name,
        email: email,
        category: category
      },
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${adminCenter}`,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


});

newRouter.post('/manager/login',(req, res)=>{

  const {email,password} = req.body ;
  
axios({
    method: 'post',
    url: 'http://localhost:5000/manager/login',
    data: {
      email: email,
      password: password
    }
  })
  .then( (response) =>{
    
    console.log(response);
    localStorage.setItem('manager',response.data.token)
    console.log(`token :${localStorage.getItem('manager')}`);
    res.render('Manager/dashboard');
  })
  .catch(function (error) {
    

    console.log(error);
  });

 
})


//ADD Promotion 
newRouter.get('/promotion/new',(req, res)=>{
  const admin = localStorage.getItem('super');
  const pourcentage = req.body.promotion;
  const product = req.body.product;
  axios
    .get("http://127.0.0.1:5000/promotion/add",
    {  data: { pourcentage: pourcentage, product : product
    },
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${admin}`,
      },
    })
    .then((response) => {
      console.log(response);
     
    })
    .catch(function (error) {
      console.log(error);
    });


});

//list promotion 
newRouter.get('/manager/promotion',(req, res)=>{
  const manager = localStorage.getItem('manager');
  axios
    .get("http://localhost:5000/manager/promotion",{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${manager}`,
      },
    })
    .then((response) => {
      console.log(response);
      res.render('/manager/promotion',{promotions:response.data});
    })
    .catch(function (error) {
      console.log(error);
    });


});

//logout 
newRouter.get('/admin/logout',(req, res)=>{
 localStorage.removeItem('super');
 res.redirect('/');

});
newRouter.get('/adminCenter/logout',(req, res)=>{
  localStorage.removeItem('admin');
  res.redirect('/');
 
 });
 newRouter.get('/manager/logout',(req, res)=>{
  localStorage.removeItem('manager');
  res.redirect('/');
 
 });

module.exports = newRouter ;