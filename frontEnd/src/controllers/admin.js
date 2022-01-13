const res = require("express/lib/response");

var $ = (className) => {
  return document.querySelector(className);
};

//login

createAdminCenter = async () => {
  const admin = localStorage.getItem('super');
  console.log(admin);
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", `bearer ${admin}`);
  let raw = JSON.stringify({
    email :$('#email').value,
    center :$('#center').value
  });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  let result = await fetch(`http://127.0.0.1:5000/super/adCenter`, requestOptions);
}
// bouton Added admin center
$('#btnAdd').addEventListener("click", (e) => {
  e.preventDefault();
  createAdminCenter();
  console.log("khadmat");
})

//list admins center
ListAdminsCenter = async () => {

  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  let admins = await fetch(`http://127.0.0.1:5000/admin/all`, requestOptions);
  let centers = await fetch(`http://localhost:5000/center/all`, requestOptions)
  res.render("admin/tables",{admins: admins, centers: centers});
}
document.addEventListener("DOMContentLoaded", function(){
  ListAdminsCenter();
});

//btn logout 
$('#logout').addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem('super');
  location.redirect('/');
  console.log("khadmat");
})


// const createAdminCenter = () => {

  
  
//   const admin = JSON.stringify(localStorage.getItem('super'));
  
//   console.log(admin);
//   axios
//   .post("http://127.0.0.1:5000/super/adCenter", {
//     data: {
//       email :JSON.stringify($('#email').value),
//       center : JSON.stringify($('#center').value)
//     },
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//       "Authorization": `Bearer ${admin}`,
//     },
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// $('#btnAdd').addEventListener("click", (e) => {
//   e.preventDefault();
  
//   createAdminCenter();
//   console.log("khadmat");
// })
