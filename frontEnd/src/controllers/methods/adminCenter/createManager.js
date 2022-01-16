import { AdminCenter } from '../../classes/index.js';

const adminCenter = new AdminCenter();

var $ = (className) => {
    return document.querySelector(className);
  };


   //Added new admin Manager
$('#AddBtn').addEventListener("click",async(e)=>{
    e.preventDefault();
    await adminCenter.createManager($('#name').value,$('#email').value,$('#category').value)
    if(adminCenter.data){
    location.replace('/adminCenter/tables')
    }
    console.log(adminCenter);
    })
