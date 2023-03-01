const input = document.getElementById("input");

input.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    document.addEventListener("keydown", keydownHandler);
  }
});

input.addEventListener("mouseup", function (event) {
  document.removeEventListener("keydown", keydownHandler);
});

function keydownHandler(event) {
  if (event.ctrlKey && event.key === "Control") {
    input.value += "1";
  } else if (event.altKey && event.key === "Alt") {
    input.value += "2";
  } else if (event.shiftKey && event.key === "Shift") {
    input.value += "3";
  }
}

function updateText() {
  const switches = document.getElementsByName("switch");

  for (let i = 0; i < switches.length; i++) {
    if (switches[i].checked) {
      document.getElementById("textbox").value = switches[i].value;
      break;
    }
  }
}
