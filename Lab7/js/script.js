function createNewSentence() {
  // отримуємо значення з текстових полів
  const inputText = document.getElementById("inputText").value;
  const inputNumbers = document.getElementById("inputNumbers").value;

  // перетворюємо рядок чисел на масив чисел
  const numbersArray = inputNumbers.split(" ").map(Number);

  // розбиваємо введений текст на слова
  const wordsArray = inputText.split(" ");
  if (wordsArray.length < 7) {
    document.getElementById("result").innerHTML =
      "Please enter a sentence with at least 7 words.";
    return;
  }
  // створюємо новий рядок зі словами, номера яких відповідають введеним числам
  let newSentence = "";
  for (let i = 0; i < numbersArray.length; i++) {
    const wordIndex = numbersArray[i] - 1;
    if (wordIndex >= 0 && wordIndex < wordsArray.length) {
      newSentence += wordsArray[wordIndex] + " ";
    }
  }

  // виводимо новий рядок на сторінку
  document.getElementById("result").innerHTML = newSentence;
}

function calculateDaysUntilSaturday() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  if (dayOfWeek === 6 || dayOfWeek === 0) {
    // Saturday or Sunday
    document.getElementById("result").innerHTML = "Today is a holiday";
  } else {
    // Calculate days until next Saturday
    const daysUntilSaturday = 6 - dayOfWeek;
    document.getElementById(
      "result_2"
    ).innerHTML = `There are ${daysUntilSaturday} days until the weekend`;
  }
}

function solveEquation() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant >= 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById(
      "solution"
    ).innerHTML = `The solutions are x1 = ${x1.toFixed(
      4
    )} and x2 = ${x2.toFixed(4)}.`;
  } else {
    document.getElementById("solution").innerHTML =
      "The quadratic equation has no real solutions.";
  }
}
