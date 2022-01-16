import { Admin } from '../../classes/index.js';

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


    

  
