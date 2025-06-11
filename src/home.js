import sushiImageOne from "./imgs/pexels-chevanon-359993.jpg";
import sushiImageTwo from "./imgs/pexels-cottonbro-3298181.jpg";

export function test() {
  window.addEventListener("load", () => {
    const content = document.querySelector("#content");
    const imgOne = document.createElement("img");
    const imgTwo = document.createElement("img");
    const textBox = document.createElement("div");
    const headOne = document.createElement("h1");
    const headThree = document.createElement("h3");
    const paraOne = document.createElement("p");
    const paraTwo = document.createElement("p");
    const paraThree = document.createElement("p");
    const paraFour = document.createElement("p");
    const textWide = document.createElement("div");
    const paraFive = document.createElement("p");

    imgOne.src = sushiImageOne;
    imgOne.alt = "Two Sushi Rolls";

    content.appendChild(imgOne);

    textBox.classList.add("home-text-box");
    headOne.textContent = "Welcome to Umi Sushi";
    headThree.textContent = "A Journey Beneath the Surface";
    paraOne.textContent =
      "Umi Sushi invites you not simply to dine, but to drift. To taste silence. To experience the brine-kissed geometry of flavor. From delicate nigiri to transcendent rolls, each bite whispers of moon-pulled tides and the ephemeral perfection found only in nature’s own design.";
    paraTwo.textContent = "This is not a meal.";
    paraThree.textContent = "This is a meditation in umami.";
    paraFour.textContent = "Welcome to the stillness. Welcome to Umi.";

    textBox.appendChild(headOne);
    textBox.appendChild(headThree);
    textBox.appendChild(paraOne);
    textBox.appendChild(paraTwo);
    textBox.appendChild(paraThree);
    textBox.appendChild(paraFour);
    content.appendChild(textBox);

    imgTwo.src = sushiImageTwo;
    imgTwo.alt = "One sushi roll being finished";

    content.appendChild(imgTwo);

    textWide.classList.add("home-wide");
    paraFive.textContent =
      "Fish caught on the cusp of dawn. Rice seasoned by memory and craft. Wasabi hand-ground with reverence. Each element honors a moment, a movement, a mystery. The ocean speaks not in noise, but in nuance—and so do we.";

    textWide.appendChild(paraFive);
    content.appendChild(textWide);
    console.log("Hello, Odinite Two!");
  });
}
