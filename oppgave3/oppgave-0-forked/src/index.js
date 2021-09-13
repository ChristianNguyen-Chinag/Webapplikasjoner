// Oppgave 1

let removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", () => {
  let removeP = document.getElementById("remove");
  removeP.textContent = "";
});

// Oppgave 2

let changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  let changeP = document.getElementById("change");
  changeP.innerHTML = "Hello, world!";
});

// Oppgave 3

let inputListener = document.getElementById("input");
let inputOutput = document.getElementById("input-text");

const clearOutput = () => {
  inputOutput.innerHTML = "";
};

clearOutput();

inputListener.addEventListener("keypress", (event) => {
  let letter = event.key;
  inputOutput.innerHTML += letter;
});

// Oppgave 4
let writeListBtn = document.getElementById("write-list");
let writeList = document.getElementById("ul");

const myList = ["item one", "item two", "item three"];

const createList = () => {
  for (let i = 0; i < myList.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = myList[i];
    writeList.appendChild(newLi);
  }
};

writeListBtn.addEventListener("click", createList);
// Oppgave 5

let createBtn = document.getElementById("create");
let createPlaceholder = document.getElementById("placeholder");
let createText = document.getElementById("text");
let createSelect = document.getElementById("select");

const createHTML = () => {
  const htmlElement = createSelect.value;
  const htmlText = createText.value;
  createPlaceholder.innerHTML += `<${htmlElement}>${htmlText}<${htmlElement}>`;
};

createBtn.addEventListener("click", createHTML);
// Oppgave 6

let removeLiBtn = document.getElementById("remove-li");
let removeUl = document.getElementById("list");

const removeLi = () => {
  const il = removeUl.lastElementChild;
  if (il) {
    removeUl.removeChild(il);
  }
};

removeLiBtn.addEventListener("click", removeLi);

// Oppgave 7

let name = document.getElementById("name");
let order = document.getElementById("order");

const failCheck = (event) => {
  let word = name.value;
  if (word && word.length >= 4) {
    order.disabled = true;
    order.style = "border: 1px solid red";
  } else {
    order.disabled = false;
    order.style = "border: 1px solid black";
  }
};

name.addEventListener("keypress", failCheck);

// Oppgave 8

let listParent = document.querySelector(".children");
let listChildren = listParent.querySelectorAll("li");
let colorBtn = document.getElementById("color");

const changeColors = () => {
  let childArray = Array.from(listChildren);
  childArray.forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 1px solid pink; margin-bottom: 10px; padding: 5px;";
    } else {
      li.style = "border: 1px solid green; margin-bottom: 10px; padding: 5px;";
    }
  });
};

colorBtn.addEventListener("click", changeColors);
