import { manager } from '../classes/index.js';

const Manager = new manager();

var $ = (className) => {
    return document.querySelector(className);
  };

  //login
  $('#connect').addEventListener("click",async(e)=>{
    e.preventDefault();
    const manager = await Manager.LoginManager($('#email').value,$('#password').value)

    if(adminCenter.data.response){
    
        console.log(adminCenter.data.response);
    }
    location.replace('/manager/dashboard');
     
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