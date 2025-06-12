import "./styles.css";
import { test } from "./home.js";
import { displayMenu } from "./menu.js";

const menu = document.querySelector(".menu");
// test();

menu.addEventListener("click", () => {
  displayMenu();
});
