console.log("main.js is loaded...");

const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#addTodo");
const warning = document.querySelector("small");
const completedInfo = document.querySelector("p");



let completedCount = 0;
const todoArray = [];




button.addEventListener("click", function () {

  const text = input.value;

  if (text.length == 0) {
    warning.innerText = "Input must not be empty";
    warning.classList.add('flashWarning');
    setTimeout(() => {
      warning.classList.remove('flashWarning');
    }, 1000);
    return;
  }
  else {
    warning.innerText = "";
  }

  todoArray.push(text);

  const item = document.createElement("li");
  list.appendChild(item);

  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  itemLabel.setAttribute("class", "itemLabel");
  item.appendChild(itemLabel);

  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);



  itemLabel.addEventListener("click", function () {


    if (item.getAttribute("class") == "completed") {
      item.setAttribute("class", "");



      completedCount--;
    }
    else {
      item.setAttribute("class", "completed");



      completedCount++;
    }

    completedInfo.innerText = `${completedCount} completed`;

  })

  trashcan.addEventListener("click", function () {
    if (item.getAttribute("class") == "completed") {
      completedCount--;
    }

    completedInfo.innerText = `${completedCount} completed`;

    let removeText = item.firstChild.firstChild.textContent;
    let indexToRemove = todoArray.indexOf(removeText);
    todoArray.splice(indexToRemove, 1);
    item.remove();

  })

  input.value = "";


})