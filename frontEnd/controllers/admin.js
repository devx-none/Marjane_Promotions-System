

import axios from 'axios'


class superAdmin {
    
    
     adminCenter(email,admin) {
     
  
        axios
          .post("http://127.0.0.1:5000/super/adCenter", {
            data: {
              email: email
            },
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${admin}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      
    }
}

module.exports = superAdmin;