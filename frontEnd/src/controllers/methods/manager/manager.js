import { Manager } from '../../classes/index.js';

const manager = new Manager();

var $ = (className) => {
    return document.querySelector(className);
  };

  //login
  $('#connect').addEventListener("click",async(e)=>{
    e.preventDefault();
    
    await manager.LoginManager($('#email').value,$('#password').value)
    if(manager.data.token){
     
      localStorage.setItem('manager',manager.data.token)
      console.log('success');
      location.replace('/manager/dashboard');
    }
     
    console.log(manager);
    })

  //Added new admin Manager
// $('#AddBtn').addEventListener("click",async(e)=>{
// e.preventDefault();
// const manager = await adminCenter.createManger($('#name').value,$('#email').value,$('#center').value,$('#category').value)
// // if(adminCenter.data.response){

// //     console.log(adminCenter.data.response);
// // }
// console.log(manager);
// })