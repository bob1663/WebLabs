function checkString() {
  const inputField = document.getElementById("inputField");
  const regex = /^(http|https):\/\//i;
  const isMatch = regex.test(inputField.value);

  if (isMatch) {
    alert("Рядок тексту починається з http або https");
  } else {
    alert("Рядок тексту не починається з http або https");
  }
}

function findWords() {
  const inputText = document.getElementById("inputText").value;
  const regex = /a[^a-zA-Z0-9]*b/g;
  const words = inputText.match(regex);
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";
  if (words !== null) {
    for (let i = 0; i < words.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerText = words[i];
      resultList.appendChild(listItem);
    }
  }
}

function replaceString() {
  let input = document.getElementById("input-field").value;
  let replaced = input.replace(/a\\\\\\a/g, "!");
  document.getElementById("output-field").innerHTML = replaced;
}

function checkDomain() {
  const domainPattern =
    /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}\/?$/;
  const domainInput = document.getElementById("domain-input");
  const enteredDomain = domainInput.value.trim();
  if (domainPattern.test(enteredDomain)) {
    alert("Correct domain entered");
  } else {
    alert("The domain you entered contains errors");
  }
}

const checkDomainBtn = document.getElementById("check-domain-btn");
checkDomainBtn.addEventListener("click", checkDomain);

function checkCreditCard() {
  const cardNumber = document.getElementById("card-number").value;
  const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  const isValid = regex.test(cardNumber);

  if (isValid) {
    alert("Введений номер картки є дійсним!");
  } else {
    alert("Введений номер картки є недійсним!");
  }
}
