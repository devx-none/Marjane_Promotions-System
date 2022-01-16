export class AdminCenter {
    data;


    LoginAdminCenter = async (email , password ) => {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
          email ,
          password
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        let result = await fetch(`http://localhost:5000/admin/login`, requestOptions);
       
        return (this.data = await result.json());
      };
    
    createManager = async (name, email ,category) => {
        const admin = localStorage.getItem('admin');
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", `bearer ${admin}`);
        let raw = JSON.stringify({
          name ,
          email ,
          category
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        let result = await fetch(`http://localhost:5000/admin/addManger`, requestOptions);
        return (this.data = await result.json());
      };


      createPromotion = async (pourcentage,product)=>{
        const adminCenter = localStorage.getItem('admin');
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", `bearer ${adminCenter}`);
        let raw = JSON.stringify({
          pourcentage ,
          product ,
         
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        let result = await fetch(`http://127.0.0.1:5000/promotion/add`, requestOptions);
        return (this.data = await result.json());
      };

      //List Manager 
      ListManagers = async () => {
        const admin = localStorage.getItem('admin');
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", `bearer ${admin}`);
      
        let requestOptions = {
          method: "GET",
          headers: myHeaders
        };
        let result = await fetch(`http://localhost:5000/manager/all`, requestOptions);
         
        return (this.data = await result.json());
      };
      

      
      



}