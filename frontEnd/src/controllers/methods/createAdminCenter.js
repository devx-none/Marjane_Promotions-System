import { Admin } from '../classes/index.js';

const adminCenter = new Admin();

var $ = (className) => {
    return document.querySelector(className);
  };


$('#btnAdd').addEventListener("click",async(e)=>{
e.preventDefault();
const getAdmins = await adminCenter.createAdminCenter($('#email').value,$('#center').value)
// if(adminCenter.data.response){

//     console.log(adminCenter.data.response);
// }
location.replace('/admin/tables');
console.log(getAdmins);
})

