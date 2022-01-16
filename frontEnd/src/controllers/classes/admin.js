export class Admin {
    data;
    LoginAdmin = async (email , password ) => {
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
      let result = await fetch(`http://localhost:5000/super/login`, requestOptions);
       
      return (this.data = await result.json());
    };
    
    createAdminCenter = async (email, center) => {
        const admin = localStorage.getItem('super');
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", `bearer ${admin}`);
        let raw = JSON.stringify({
          email ,
          center 
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        let result = await fetch(`http://127.0.0.1:5000/super/adCenter`, requestOptions);
        return (this.data = await result.json());
      };


      ListAdminsCenter = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", `bearer ${admin}`);
        let raw = JSON.stringify({
          email ,
          center 
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        let result = await fetch(`http://127.0.0.1:5000/super/adCenter`, requestOptions);
        return (this.data = await result.json());
      }







}