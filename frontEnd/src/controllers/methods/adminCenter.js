import { AdminCenter } from '../classes/index.js';

const adminCenter = new AdminCenter();

var $ = (className) => {
    return document.querySelector(className);
  };

  //login
  $('#connect').addEventListener("click",async(e)=>{
    e.preventDefault();
    await adminCenter.LoginAdminCenter($('#email').value,$('#password').value)

    if(adminCenter.data.token){
      localStorage.setItem('admin',adminCenter.data.token)
      location.replace('/adminCenter/dashboard');
     }
    
     
    console.log(manager);
    })

  //Added new admin Manager
$('#AddBtn').addEventListener("click",async(e)=>{
e.preventDefault();
const manager = await adminCenter.createManger($('#name').value,$('#email').value,$('#center').value,$('#category').value)
// if(adminCenter.data.response){

//     console.log(adminCenter.data.response);
// }
console.log(manager);
})