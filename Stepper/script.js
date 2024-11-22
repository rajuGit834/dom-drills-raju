var nextBtn = document.getElementById("next-btn");
var prevBtn = document.getElementById("prev-btn");
var nextCount = -1;
var steps = document.querySelector(".steps");
var allDiv = steps.querySelectorAll(":scope > div");
var orderHeading = [
  "Add contact details for further communications",
  "Add shipping address for successfull delivery",
  "Complete Payment to complete the order",
  "Ready to get delivered",
  "Delivered Successfully!🎉",
];
let count = 0;
nextBtn.addEventListener("click", moveNextStep);

function moveNextStep() {
  count++;
  if (nextCount < 5) {
    nextCount += 2;
    let step = allDiv[nextCount - 1].querySelector("div");
    step.style.backgroundColor = "green";
    step.querySelector("p").textContent = "✔";
    step.querySelector("p").style.color = "white";
    allDiv[nextCount].style.border = "2px solid green";
    allDiv[nextCount + 1].querySelector("div").style.backgroundColor =
      "rgb(77, 77, 185)";
    allDiv[nextCount + 1].querySelector("div").style.color = "white";
    let output = document.querySelector("#output-box");
    output.lastChild.textContent = orderHeading[count];
  } else {
    nextCount++;
    let step = allDiv[nextCount].querySelector("div");
    step.style.backgroundColor = "green";
    step.querySelector("p").textContent = "✔";
    step.querySelector("p").style.color = "white";
    let output = document.querySelector("#output-box");
    output.lastChild.textContent = orderHeading[count];
  }
  if (nextCount > 0) {
    prevBtn.disabled = false;
    prevBtn.style.cursor = "pointer";
  }
  if (nextCount >= 6) {
    nextBtn.disabled = true;
    nextBtn.style.cursor = "not-allowed";
  }
}

prevBtn.addEventListener("click", movePrevStep);

function movePrevStep() {
  count--;
  if (count === 0) {
    let output = document.querySelector("#output-box");
    output.lastChild.textContent = orderHeading[count];
    let step = allDiv[nextCount - 1].querySelector("div");
    step.style.backgroundColor = "rgb(77, 77, 185)";
    step.querySelector("p").textContent = `${count + 1}`;
    step.querySelector("p").style.color = "white";
    allDiv[nextCount].style.border = "2px solid black";
    allDiv[nextCount + 1].querySelector("div").style.backgroundColor =
      "rgb(207, 201, 201)";
    allDiv[nextCount + 1].querySelector("div").style.color = "black";
    nextCount = -1;
  } else if (nextCount >= 1 && nextCount <= 5) {
    let output = document.querySelector("#output-box");
    output.lastChild.textContent = orderHeading[count];
    let step = allDiv[nextCount - 1].querySelector("div");
    step.style.backgroundColor = "rgb(77, 77, 185)";
    step.querySelector("p").textContent = `${count + 1}`;
    step.querySelector("p").style.color = "white";
    allDiv[nextCount].style.border = "2px solid black";
    allDiv[nextCount + 1].querySelector("div").style.backgroundColor =
      "rgb(207, 201, 201)";
    allDiv[nextCount + 1].querySelector("div").style.color = "black";
    nextCount -= 2;
  } else {
    nextCount -= 1;
    let output = document.querySelector("#output-box");
    output.lastChild.textContent = orderHeading[count];
    let step = allDiv[nextCount + 1].querySelector("div");
    step.style.backgroundColor = "rgb(77, 77, 185)";
    step.querySelector("p").textContent = `${count + 1}`;
    step.querySelector("p").style.color = "white";
  }
  if (nextCount < 1) {
    prevBtn.disabled = true;
    prevBtn.style.cursor = "not-allowed";
  }
  if (nextCount >= 1) {
    nextBtn.disabled = false;
    nextBtn.style.cursor = "pointer";
  }
}
