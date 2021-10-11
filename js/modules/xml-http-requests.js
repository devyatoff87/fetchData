//common reusable function
const makeRequest = (method, url, data = null) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open(method, url); //no data needed
    req.responseType = "json"; //no manual parsing needed later

    data && req.setRequestHeader("Content-Type", "application/json");

    req.addEventListener("load", () => {
      resolve(req.response); //will be returned in case of success
    });

    req.addEventListener("error", () => {
      req.status >= 400
        ? reject("req status >= 400")
        : reject("an unknown miskate occured"); //will be return in case of mistake
    });

    req.send(JSON.stringify(data));
  });
};


  //GET REQUEST
export const getData = (url) =>{
    makeRequest("GET", url)
      .then((responseData) => {
        console.log(responseData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //POST REQUEST
  export const sendData = (url, data) => {
    makeRequest("POST", url, data)
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  },


