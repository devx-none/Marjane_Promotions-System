var $ = (className) => {
    return document.querySelector(className);
  };
  
  //login
  
  createManager = async () => {
    const adminCenter = localStorage.getItem('adminCenter');
    console.log(admin);
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", `bearer ${adminCenter}`);
    let raw = JSON.stringify({
      name:$('#name').value,
      email :$('#email').value,
      center :$('#center').value,
      category:$('#category').value
    });
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    let result = await fetch(`http://localhost:5000/admin/addManger`, requestOptions);
  }
  $('#btnAdd').addEventListener("click", (e) => {
    e.preventDefault();
    createManager();
    console.log("khadmat");
  })