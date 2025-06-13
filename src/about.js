import sushi from "./imgs/about.jpg";
import headerImg from "./imgs/aboutHeader.jpg";
import map from "./imgs/aboutMap.png";

export function displayAbout() {
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const wrapper = document.createElement("div");
  const imgColumn = document.createElement("div");
  const textColumn = document.createElement("div");
  const textHeader = document.createElement("div");
  const hours = document.createElement("div");
  const number = document.createElement("div");
  const address = document.createElement("div");
  const addressImg = document.createElement("div");
  const spanOne = document.createElement("span");
  const spanTwo = document.createElement("span");
  const spanThree = document.createElement("span");

  header.textContent = "About";
  header.classList.add("about-header");
  imgOne.src = headerImg;
  imgOne.alt = "Japanese Restaurant";

  content.appendChild(header);
  content.appendChild(imgOne);

  wrapper.classList.add("about-wrapper");
  imgColumn.classList.add("picture-column");
  imgTwo.src = sushi;
  imgTwo.alt = "Sushi";

  imgColumn.appendChild(imgTwo);
  wrapper.appendChild(imgColumn);

  textColumn.classList.add("text-column");
  textHeader.classList.add("text-column-header");
  textHeader.textContent = "Umami Sushi";
  hours.textContent = " Hours:";
  spanOne.textContent = " Open Everyday 5pm to 10pm";
  number.textContent = " Number:";
  spanTwo.textContent = " (789) 234 4567";
  address.textContent = " Address:";
  spanThree.textContent = " 111 Kirkland Drive Irving, TX 75061";
  imgThree.src = map;
  imgThree.alt = "Map";
  imgThree.classList.add("about-img");

  hours.appendChild(spanOne);
  number.appendChild(spanTwo);
  address.appendChild(spanThree);
  addressImg.appendChild(imgThree);

  textColumn.appendChild(textHeader);
  textColumn.appendChild(hours);
  textColumn.appendChild(number);
  textColumn.appendChild(address);
  textColumn.appendChild(addressImg);
  wrapper.appendChild(textColumn);

  content.appendChild(wrapper);

  console.log("about");
}
