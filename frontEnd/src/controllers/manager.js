ListPromotion = async () => {
    const manager = localStorage.getItem('manager');
    console.log(admin);
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", `bearer ${manager}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: raw,
    };
    let result = await fetch(`http://localhost:5000/manager/promotion`, requestOptions);
  }
  $('#btnAdd').addEventListener("click", (e) => {
    e.preventDefault();
    createManager();
    console.log("khadmat");
  })