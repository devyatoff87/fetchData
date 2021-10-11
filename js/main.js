let getBtn = document.querySelector("#get");
let sendBtn = document.querySelector("#send");
let persons = document.querySelector(".persons");

//import { getData, sendData } from './modules/xml-http-requests.js';
import { getData, sendData } from "./modules/fetch-requests.js";
import {
  createElForData,
  createElForSentData,
} from "./modules/layout-constructor.js";

let flag = Boolean;

getBtn.addEventListener("click", () => {
  flag = true;
  let data = getData("https://reqres.in/api/users?page=2");
  printData(data);
});

const body = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

sendBtn.addEventListener("click", () => {
  flag = false;
  let data = sendData("https://reqres.in/api/register", body, {
    "Content-Type": "application/json",
  });
  printData(data);
});

function printData(data) {
  persons.innerHTML = "";
  if (flag == true) {
    data.then((data) => {
      data.data.forEach((item) => {
        createElForData(item, persons);
      });
    });
    return;
  }
  if (flag == false) {
    data.then((data) => {
      createElForSentData(data, persons);
    });
  }
}
