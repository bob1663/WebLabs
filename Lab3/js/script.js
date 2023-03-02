/* function doubleDiv() {
  let divElements = document.querySelectorAll("div");

  divElements.forEach(function (div) {
    console.log(div.offsetWidth);
  });

  window.alert("Close this dialog to double the width of all divs.");

  window.setTimeout(function () {
    divElements.forEach(function (div) {
      div.style.width = div.offsetWidth * 2 + "px";
    });
  }, 500);
} */

window.onload = function() {
  alert("Сторінка завантажена");
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    console.log("Ширина блоку div " + (i + 1) + ": " + divs[i].offsetWidth + "px");
  }
  var resizeDivs = function() {
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.width = (divs[i].offsetWidth * 2) + "px";
    }
  };
  setTimeout(resizeDivs, 0);
};

function changeColor() {
  let className = prompt("Enter class name:");
  let colorName = prompt("Enter color name:");

  let elements = document.querySelectorAll("." + className);

  elements.forEach(function (element) {
    element.style.backgroundColor = colorName;
  });
}

function showWindowSize() {
  let answer = confirm("Бажаєте взнати розмір робочого вікна веб-сторінки?");

  if (answer == true) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    window.alert(
      "Розмір вікна: " + windowWidth + "x" + windowHeight + " пікселів."
    );
  } else {
    let windowSizeDiv = document.getElementById("windowSize");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    windowSizeDiv.innerText =
      "Розмір вікна: " + windowWidth + "x" + windowHeight + " пікселів.";
  }
}

function openCustomWindow() {
  let button1 = document.querySelector("#button1");

  button1.addEventListener("click", function () {
    let newWindow = window.open(
      "",
      "New Window",
      "height=600,width=500,scrollbars=yes"
    );
  });
}

function openNewWindow() {
  window.open(
    "https://lpnu.ua/",
    "_blank",
    "height=600,width=500,scrollbars=yes"
  );
}
