import { AdminCenter } from '../../classes/index.js';

const adminCenter = new AdminCenter();

var $ = (className) => {
    return document.querySelector(className);
  };

  $('#addBtn').addEventListener("click",async(e)=>{
    e.preventDefault();
    await adminCenter.createPromotion($('#discount').value,$('#product').value)
    if(adminCenter.data){
    
        console.log(adminCenter.data);
        location.replace('/adminCenter/promotions');
    }
    
    console.log(adminCenter);
    })
  