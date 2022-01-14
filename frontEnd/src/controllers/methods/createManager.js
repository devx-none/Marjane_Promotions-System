import { AdminCenter } from '../classes/index.js';

const adminCenter = new AdminCenter();

var $ = (className) => {
    return document.querySelector(className);
  };


   //Added new admin Manager
$('#AddBtn').addEventListener("click",async(e)=>{
    e.preventDefault();
    const manager = await adminCenter.createManager($('#name').value,$('#email').value,$('#category').value)
    alert('test')
    // if(adminCenter.data.response){
    
    //     console.log(adminCenter.data.response);
    // }
    console.log(manager);
    })
