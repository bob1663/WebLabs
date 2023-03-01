let intervalID;

function startTimer() {
  let a = 0;
  let b = 1;
  let fibonacciNumber = document.getElementById("fibonacci-number");

  intervalID = setInterval(function () {
    let c = a + b;
    a = b;
    b = c;
    fibonacciNumber.innerHTML = c;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalID);
}

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let formattedTime = hours + ":" + minutes + ":" + seconds;
  document.getElementById("current-time").innerHTML = formattedTime;
}

setInterval(updateTime, 1000);

function showName() {
  var nameParagraph = document.getElementById("name");
  nameParagraph.innerHTML = "Vitaliy Mitnichuk";
  setTimeout(function () {
    nameParagraph.innerHTML = "";
  }, 5000);
}

function showInfo() {
  setTimeout(function () {
    var nameParagraph = document.getElementById("name");
    nameParagraph.innerHTML = "Vitaliy Mitnichuk";
    setTimeout(function () {
      nameParagraph.innerHTML = "";
      alert("Група: CS-206, Vitaliy Mitnichuk");
    }, 10000);
  }, 5000);
}
