export class manager {
    data;

    LoginManager = async (email , password ) => {
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
        let result = await fetch(`http://localhost:5000/manager/login`, requestOptions);
        return (this.data = await result.json());
      };
    
 


      getPromotion = async ()=>{

        const manager = localStorage.getItem('manager');
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", `bearer ${manager}`);
        let raw = JSON.stringify({
          name ,
          email ,
          center ,
          category
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        let result = await fetch(`http://127.0.0.1:5000/promotion/add`, requestOptions);
        return (this.data = await result.json());
      };

      
      




}