import { Admin } from '../classes/index.js';

const admin = new Admin();

var $ = (className) => {
    return document.querySelector(className);
  };

  //login
  $('#connect').addEventListener("click",async(e)=>{
    e.preventDefault();
    await admin.LoginAdmin($('#email').value,$('#password').value)

    if(admin.data.token){
      localStorage.setItem('super',admin.data.token)
      location.replace('/admin/dashboard');
     }
    
     
    })

  //Added new admin center
  
// function  addAdminCenter()
// {
// // $('#btnAdd').addEventListener("click",async(e)=>{
// e.preventDefault();
// alert('Please')
// const getAdmins = await adminCenter.createAdminCenter($('#email').value,$('#center').value)
// // if(adminCenter.data.response){

// //     console.log(adminCenter.data.response);
// // }
// // location.replace('/admin/tables');
// console.log(getAdmins);
// // })
// }
// addAdminCenter();