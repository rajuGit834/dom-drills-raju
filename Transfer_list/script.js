let leftAll = document.querySelector("#left-all");
let leftSelected = document.querySelector("#left-selected");
let rightSelected = document.querySelector("#right-selected");
let rightAll = document.querySelector("#right-all");
let leftDiv = document.getElementById("left");
let rightDiv = document.getElementById("right");
let leftData = [
  '<input type="checkbox" id="react-left"><label for="reacy-left">React</label>',
  '<input type="checkbox" id="vue-left"><label for="vue-left">Vue</label>',
  '<input type="checkbox" id="svelte-left"><label for="svelte-left">Svelte</label>',
  '<input type="checkbox" id="js-left"><label for="js-left">JS</label>',
  '<input type="checkbox" id="html-left"><label for="html-left">HTML</label>',
  '<input type="checkbox" id="css-left"><label for="css-left">CSS</label>',
  '<input type="checkbox" id="ts-left"><label for="ts-left">TS</label>',
  '<input type="checkbox" id="angular-left"><label for="angular-left">Angular</label>',
];

let rightData = [];

for (let i = 0; i < leftData.length; i++) {
  let div = document.createElement("div");
  div.className = "check-box-left";
  div.innerHTML = leftData[i];
  leftDiv.appendChild(div);
}

leftAll.addEventListener("click", moveAllElementLeft);
leftSelected.addEventListener("click", moveLeft);
rightSelected.addEventListener("click", moveRight);
rightAll.addEventListener("click", moveAllElementRight);

function moveAllElementLeft() {
  for (let i = 0; i < rightData.length; i++) {
    leftData.push(rightData[i]);
  }
  rightData.splice(0, rightData.length);
  rightDiv.innerHTML = "";
  leftDiv.innerHTML = "";

  for (let i = 0; i < leftData.length; i++) {
    let div = document.createElement("div");
    div.className = "check-box-left";
    div.innerHTML = leftData[i];
    leftDiv.appendChild(div);
  }
}

function moveLeft() {
  if (rightData.length > 0) {
    let itemsOfRightBox = document.querySelectorAll(".check-box-right");
    let indexOfChecked = [];
    for (let i = 0; i < itemsOfRightBox.length; i++) {
      if (itemsOfRightBox[i].querySelector('input[type="checkbox"').checked) {
        indexOfChecked.push(i);
      }
    }

    for (let i = 0; i < indexOfChecked.length; i++) {
      rightData.splice(indexOfChecked[i] - i, 1);
      leftData.push(itemsOfRightBox[indexOfChecked[i]].innerHTML);
      rightDiv.removeChild(itemsOfRightBox[indexOfChecked[i]]);
    }
    leftDiv.innerHTML = "";
    for (let i = 0; i < leftData.length; i++) {
      let div = document.createElement("div");
      div.className = "check-box-left";
      div.innerHTML = leftData[i];
      leftDiv.appendChild(div);
    }
  }
}

function moveRight() {
  let indexOfSelectedCheckbox = [];
  let itemsOfLeftBox = document.querySelectorAll(".check-box-left");
  for (let i = 0; i < itemsOfLeftBox.length; i++) {
    if (itemsOfLeftBox[i].querySelector('input[type="checkbox').checked) {
      indexOfSelectedCheckbox.push(i);
    }
  }

  for (let i = 0; i < indexOfSelectedCheckbox.length; i++) {
    leftData.splice(indexOfSelectedCheckbox[i] - i, 1);
    rightData.push(itemsOfLeftBox[indexOfSelectedCheckbox[i]].innerHTML);
    leftDiv.removeChild(itemsOfLeftBox[indexOfSelectedCheckbox[i]]);
  }
  rightDiv.innerHTML = "";
  for (let i = 0; i < rightData.length; i++) {
    let div = document.createElement("div");
    div.className = "check-box-right";
    div.innerHTML = rightData[i];
    rightDiv.appendChild(div);
  }
}

function moveAllElementRight() {
  for (let i = 0; i < leftData.length; i++) {
    rightData.push(leftData[i]);
  }
  leftData.splice(0, leftData.length);
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  for (let i = 0; i < rightData.length; i++) {
    let div = document.createElement("div");
    div.className = "check-box-right";
    div.innerHTML = rightData[i];
    rightDiv.appendChild(div);
  }
}
