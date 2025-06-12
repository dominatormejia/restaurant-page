import sushiRoll from "./imgs/menuaSushiRoll.jpg";
import meat from "./imgs/menuMeat.jpg";
import mochi from "./imgs/menuMochi.jpg";
import ramen from "./imgs/menuRamen.jpg";
import sashimi from "./imgs/menuSashimi.jpg";
import takoyaki from "./imgs/menuTakoyaki.jpg";
import tray from "./imgs/menuTray.jpg";
import nigiri from "./imgs/twoNigiri.jpg";

export function displayMenu() {
  const content = document.querySelector("#content");
  const headerOne = document.createElement("h1");
  const cardWrapper = document.createElement("div");
  const menuCardOne = document.createElement("div");
  const menuCardTwo = document.createElement("div");
  const menuCardThree = document.createElement("div");
  const menuCardFour = document.createElement("div");
  const menuCardFive = document.createElement("div");
  const menuCardSix = document.createElement("div");
  const menuCardSeven = document.createElement("div");
  const menuCardEight = document.createElement("div");

  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const imgFour = document.createElement("img");
  const imgFive = document.createElement("img");
  const imgSix = document.createElement("img");
  const imgSeven = document.createElement("img");
  const imgEight = document.createElement("img");

  const headerTwo = document.createElement("h2");
  const headerThree = document.createElement("h2");
  const headerFour = document.createElement("h2");
  const headerFive = document.createElement("h2");
  const headerSix = document.createElement("h2");
  const headerSeven = document.createElement("h2");
  const headerEight = document.createElement("h2");
  const headerNine = document.createElement("h2");

  const paraOne = document.createElement("p");
  const paraTwo = document.createElement("p");
  const paraThree = document.createElement("p");
  const paraFour = document.createElement("p");
  const paraFive = document.createElement("p");
  const paraSix = document.createElement("p");
  const paraSeven = document.createElement("p");
  const paraEight = document.createElement("p");

  headerOne.classList.add("menu-headOne");
  headerOne.textContent = "Menu";
  content.appendChild(headerOne);
  cardWrapper.classList.add("menu-card-wrapper");
  menuCardOne.classList.add("menu-card");
  imgOne.src = tray;
  imgOne.alt = "Tray of Sushi";
  headerTwo.textContent = "Our Signature Sampler Tray";
  paraOne.textContent =
    "An artful arrangement of nigiri, sashimi, and specialty rolls—featuring the day’s freshest catch. Balanced, refined, and designed to be shared. A symphony of the sea on a single tray.";
  menuCardOne.appendChild(imgOne);
  menuCardOne.appendChild(headerTwo);
  menuCardOne.appendChild(paraOne);
  cardWrapper.appendChild(menuCardOne);

  menuCardTwo.classList.add("menu-card");
  imgTwo.src = sushiRoll;
  imgTwo.alt = "Sushi Roll";
  headerThree.textContent = "Elevated Sushi Rolls";
  paraTwo.textContent =
    "Delicate slices of tuna and avocado wrapped in seaweed and seasoned rice, topped with yuzu-infused aioli and tobiko. A roll that echoes the gentle bloom of ocean tides.";
  menuCardTwo.appendChild(imgTwo);
  menuCardTwo.appendChild(headerThree);
  menuCardTwo.appendChild(paraTwo);
  cardWrapper.appendChild(menuCardTwo);

  menuCardThree.classList.add("menu-card");
  imgThree.src = nigiri;
  imgThree.alt = "Nigiri";
  headerFour.textContent = "Our Fresh Nigiri";
  paraThree.textContent =
    "A pristine cut of flame-kissed salmon rests atop hand-pressed shari, brushed with citrus soy and garnished with a whisper of micro shiso—where warmth meets the cool hush of the sea.";
  menuCardThree.appendChild(imgThree);
  menuCardThree.appendChild(headerFour);
  menuCardThree.appendChild(paraThree);
  cardWrapper.appendChild(menuCardThree);

  menuCardFour.classList.add("menu-card");
  imgFour.src = sashimi;
  imgFour.alt = "Sashimi";
  headerFive.textContent = "Our Fresh Sashimi";
  paraFour.textContent =
    "Exquisitely sliced cuts of bluefin, hamachi, and botan ebi—served unadorned on chilled slate, allowing the purity of the sea to speak in texture, temperature, and taste.";
  menuCardFour.appendChild(imgFour);
  menuCardFour.appendChild(headerFive);
  menuCardFour.appendChild(paraFour);
  cardWrapper.appendChild(menuCardFour);

  menuCardFive.classList.add("menu-card");
  imgFive.src = ramen;
  imgFive.alt = "Ramen";
  headerSix.textContent = "Authentic Ramen";
  paraFive.textContent =
    "A deep, clouded broth brewed for 36 hours, layering black garlic, miso, and dashi. Tangles of hand-pulled noodles cradle sous-vide chashu, jammy yolk egg, and whispers of smoked scallion oil.";
  menuCardFive.appendChild(imgFive);
  menuCardFive.appendChild(headerSix);
  menuCardFive.appendChild(paraFive);
  cardWrapper.appendChild(menuCardFive);

  menuCardSix.classList.add("menu-card");
  imgSix.src = meat;
  imgSix.alt = "Traditionally Prepared Meat";
  headerSeven.textContent = "Traditionally Prepared Meat";
  paraSix.textContent =
    "Slices of A5 wagyu, kissed by white charcoal flame, finished with sea salt snow and sansho pepper. Served with shiso chimichurri and pickled mountain roots for balance—a harmony of fire, fat, and finesse.";
  menuCardSix.appendChild(imgSix);
  menuCardSix.appendChild(headerSeven);
  menuCardSix.appendChild(paraSix);
  cardWrapper.appendChild(menuCardSix);

  menuCardSeven.classList.add("menu-card");
  imgSeven.src = takoyaki;
  imgSeven.alt = "Street Takoyaki";
  headerEight.textContent = "Street Takoyaki";
  paraSeven.textContent =
    "Golden orbs of octopus-filled batter, crisped to a whisper-thin shell. Topped with shaved bonito, nori threads, and smoked soy aioli—they flicker and dance like lanterns on the tide.";
  menuCardSeven.appendChild(imgSeven);
  menuCardSeven.appendChild(headerEight);
  menuCardSeven.appendChild(paraSeven);
  cardWrapper.appendChild(menuCardSeven);

  menuCardEight.classList.add("menu-card");
  imgEight.src = mochi;
  imgEight.alt = "Desert Mochi";
  headerNine.textContent = "Desert Mochi";
  paraEight.textContent =
    "A delicate trio of hand-crafted mochi, filled with seasonal fruits and matcha cream. Each bite—a fleeting bloom of chill, chew, and subtle sweetness, dissolving like first snow on skin.";
  menuCardEight.appendChild(imgEight);
  menuCardEight.appendChild(headerNine);
  menuCardEight.appendChild(paraEight);
  cardWrapper.appendChild(menuCardEight);

  content.appendChild(cardWrapper);
  console.log("menu test");
}
