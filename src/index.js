import "./styles.css";
import { test } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

(function domControl() {
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");
  const home = document.querySelector(".home");
  const content = document.querySelector("#content");

  window.addEventListener("load", () => {
    test();
  });

  about.addEventListener("click", () => {
    clearDom();
    displayAbout();
  });

  menu.addEventListener("click", () => {
    clearDom();
    displayMenu();
  });
  home.addEventListener("click", () => {
    clearDom();
    test();
  });

  function clearDom() {
    while (content.lastElementChild) {
      content.removeChild(content.lastElementChild);
    }
  }
})();
