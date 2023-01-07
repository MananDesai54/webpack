import moment from "moment";
import "./index.css";
import "./index.scss";
const getUserModule = () =>
  import(/* webpackChunkName: "userAPI"  */ "./util/api");

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});
