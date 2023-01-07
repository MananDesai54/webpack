import { getUsers } from "./util/api";
import "./index.css";
import "./index.scss";

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

getUsers().then((json) => console.log(json));
